require 'pry'
require_relative 'ds'

module ComputerBase

  def method_missing(method, *args)
    info_method_name = "get_#{method}_info".to_sym
    price_method_name = "get_#{method}_price".to_sym

    info = @data_source.send(info_method_name, args)
    price = @data_source.send(price_method_name, args)

    result = "#{method}: #{info} ($#{price})"
    return "* #{result}" if price >= 100
    result
  end
end

class Computer
  include ComputerBase

  def initialize(computer_id, data_source)
    @id = computer_id
    @data_source = data_source
  end
end

ds = DS.new
workstation1 = Computer.new(1, ds)
p workstation1.mouse
p workstation1.cpu
p workstation1.keyboard
p workstation1.screen
