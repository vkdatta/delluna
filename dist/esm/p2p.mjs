export const name="p2p";
export const id="dl_a12b82e0ad10586b1f4c";
export const url=new URL("../icons/p2p.svg?v=388769382f06660a0b24d47fba41a9e678665d75bee29de3f9b45f53b29c9bc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
