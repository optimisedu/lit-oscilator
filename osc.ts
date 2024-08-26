import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('osc-element')
export class oscElement extends LitElement {
  
  @property({attribute: true}) 
  wave: string = '';
  @property({attribute: true}) 
  frequency: number = 440;
  constructor() {
    super();
  }
    render() {
    return html`
                  <div class="flex flex-col items-center">
                  <label class="mb-3">Waveform</label>
                  <select @change="${this.waveChange}" class="px-2 py-1 rounded-md" id="osc"></select>
                    <option id="sine" value="sine">Sine</option>
                    <option id="square" value="square">Square</option>
                    <option id="triangle" value="triangle">Triangle</option>
                    <option id ="sawtooth" value="sawtooth">Sawtooth</option>
                  </select>
                </div>
                <div @change="${this.freqChange}" class="flex flex-col items-center px-2 py-2">
                    <label class="mb-1">Frequency</label>
                    <input type="range" id="oscFreq" min="0" max="11000" value="440" class="w-full appearance-none h-1 bg-blue-500 rounded-md hover: bg-blue-700  focus: bg-blue-700 active: bg-blue-700 " oninput="this.nextElementSibling.value = this.value" />
                    <input type="number" class="h-7 px-3 mt-2 rounded-lg text-center" value="440" oninput="oscFreq.value = this.value" />
                </div>
          `; 
    }
      waveChange(event: Event) {
        const oscElement = event.target as HTMLSelectElement;  
        this.wave = oscElement.value;
      }  
      freqChange(event: Event) {
        const freqElement = event.target as HTMLInputElement;  
        this.frequency = parseInt(freqElement.value);
      }  
    }

