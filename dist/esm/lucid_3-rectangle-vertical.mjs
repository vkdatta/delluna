export const name="lucid_3-rectangle-vertical";
export const id="dl_b2964954e7b04c09b372";
export const url=new URL("../icons/lucid_3-rectangle-vertical.svg?v=6b12c7626b9779cebdc92c3e46887329cb876050f0e03e7b3f7951c038166aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
