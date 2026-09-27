export const name="microphone-slash";
export const id="dl_58cf90f2d8eb44968d59";
export const url=new URL("../icons/microphone-slash.svg?v=5b00031ac6ab655108b6b38adffcfbc3934f4281e1bf82376a84af2a3d1fe79b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
