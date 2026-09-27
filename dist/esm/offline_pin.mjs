export const name="offline_pin";
export const id="dl_92615745e29ae84adc76";
export const url=new URL("../icons/offline_pin.svg?v=734b30bc8dc620d12d777bc68e5d31ff1d68902975b00252b795d2ea5d8bed7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
