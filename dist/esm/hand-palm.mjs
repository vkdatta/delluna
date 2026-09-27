export const name="hand-palm";
export const id="dl_35ce130893964e84b5ab";
export const url=new URL("../icons/hand-palm.svg?v=ef82c6fc386e86bc9fa641b252a69433811e743f6bac643a52aea863a2f5d3fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
