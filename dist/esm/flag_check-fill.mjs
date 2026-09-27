export const name="flag_check-fill";
export const id="dl_5e5c7cf1334521478e4b";
export const url=new URL("../icons/flag_check-fill.svg?v=0c6d01612794094caa76cf50f48ddf8128927494583809c000e8b0112776cbe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
