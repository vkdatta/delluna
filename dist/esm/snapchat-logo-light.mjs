export const name="snapchat-logo-light";
export const id="dl_eb55dc2a353b484b9feb";
export const url=new URL("../icons/S/snapchat-logo-light.svg?v=930e356c208f4b5fe7743d1516cd662550ffd29414226b27683253382b0e5f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
