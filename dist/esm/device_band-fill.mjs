export const name="device_band-fill";
export const id="dl_31f58203ecca0c225fb1";
export const url=new URL("../icons/device_band-fill.svg?v=d6e929262d41706289df8f9ab934d241d38246c40aeb69828705fff171d2d67f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
