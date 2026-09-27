export const name="dermatology-fill";
export const id="dl_55c0cd569c2130a789d7";
export const url=new URL("../icons/dermatology-fill.svg?v=2667ea615a943b2f9e768d4f704b2a7905ca2c64224d66e3db1c55f6a490a69a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
