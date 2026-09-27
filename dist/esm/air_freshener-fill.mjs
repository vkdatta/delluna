export const name="air_freshener-fill";
export const id="dl_8b349603a0bc61cbb2e6";
export const url=new URL("../icons/air_freshener-fill.svg?v=bc45e52eea45128b648e69d872b4877c0dc386c33be244b83f4b1df76caec3b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
