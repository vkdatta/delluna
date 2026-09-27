export const name="hide-fill";
export const id="dl_a18a5840f8dd3afbb8a2";
export const url=new URL("../icons/hide-fill.svg?v=d618cdca60cf156c2d6931cdb0aa66c921c42d05caed6d89459df1f8bea4efba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
