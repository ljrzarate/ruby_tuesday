require_relative '../computer'

describe Computer do

  describe '#mouse' do
    let(:ds) { instance_double(DS, get_mouse_info: "My Mouse", get_mouse_price: 120) }
    let(:computer) { Computer.new(1, ds) }

    it { expect(computer.mouse).to(eq('* mouse: My Mouse ($120)')) }
  end

  describe '#cpu' do
    let(:ds) { instance_double(DS, get_cpu_info: "My cpu", get_cpu_price: 60) }
    let(:computer) { Computer.new(1, ds) }

    it { expect(computer.cpu).to(eq('cpu: My cpu ($60)')) }
  end

  describe '#keyboard' do
    let(:ds) { instance_double(DS, get_keyboard_info: "My keyboard", get_keyboard_price: 300) }
    let(:computer) { Computer.new(1, ds) }

    it { expect(computer.keyboard).to(eq('* keyboard: My keyboard ($300)')) }
  end

  describe '#display' do
    let(:ds) { instance_double(DS, get_screen_info: "My screen", get_screen_price: 300) }
    let(:computer) { Computer.new(1, ds) }

    it { expect(computer.screen).to(eq('* screen: My screen ($300)')) }
  end
end
