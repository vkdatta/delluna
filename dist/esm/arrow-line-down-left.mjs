export const name="arrow-line-down-left";
export const id="dl_50f2ec0f0d214ea1b303";
export const url=new URL("../icons/arrow-line-down-left.svg?v=611e2b9eb1b8c2796e0936f8d2201fd911068d73eeb16e15643a7dbe391ed57f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
