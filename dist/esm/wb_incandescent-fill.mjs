export const name="wb_incandescent-fill";
export const id="dl_bb6f0c3f78b415a704b2";
export const url=new URL("../icons/wb_incandescent-fill.svg?v=c7b6cdb0480d535786e1ddeba9bdd88e447165c18364624e7d1e1407ee61afa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
