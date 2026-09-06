export const name="pint-glass-thin";
export const id="dl_af6867c5ef5a424d9550";
export const url=new URL("../icons/pint-glass-thin.svg?v=82c44cbb894338d700e8976067f32b510878482c9eb693f0e2cfae39590a71b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
