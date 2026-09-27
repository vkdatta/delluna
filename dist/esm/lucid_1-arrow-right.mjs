export const name="lucid_1-arrow-right";
export const id="dl_f3ac3d3e9be74cf5a538";
export const url=new URL("../icons/lucid_1-arrow-right.svg?v=3cffc41f0f06241889aa220113e671492f9279d21c0a1ec8809f785900a95249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
