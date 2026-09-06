export const name="gas-pump-thin";
export const id="dl_f712a62750024f148314";
export const url=new URL("../icons/gas-pump-thin.svg?v=3a6a8c2976c618904a0f7b4a4d48ddb8b7990697eb569eeaba9caa48596cac89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
