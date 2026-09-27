export const name="arrow_drop_up-fill";
export const id="dl_6b5f9fd58bdebc09e3f8";
export const url=new URL("../icons/arrow_drop_up-fill.svg?v=3ba014bb1ee9432191cf11785fb5e64702aeb4f7ea4dbc46a102fa13648079b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
