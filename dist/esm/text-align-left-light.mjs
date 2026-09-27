export const name="text-align-left-light";
export const id="dl_6d2693137e7d5bd4bb51";
export const url=new URL("../icons/text-align-left-light.svg?v=4a5dc97cb02db58e3e7ea9c99d545113d64cbdfc99dba859c87a359174921d06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
