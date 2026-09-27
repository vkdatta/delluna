export const name="windmill-thin";
export const id="dl_e1e8e15e47c993c91624";
export const url=new URL("../icons/windmill-thin.svg?v=41ffc2d1001000fd120f5d33a8ab60185f6eade908be7392a9a51d41ad921904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
