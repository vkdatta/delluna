export const name="ecg";
export const id="dl_a9550036bcd248099797";
export const url=new URL("../icons/E/ecg.svg?v=3aee3fe92634fad138f374d5e60365b1e90e64f5872aad1c363b3cc194f16e15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
