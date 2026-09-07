export const name="shapes-thin";
export const id="dl_5a5d7fd35eb6409680fe";
export const url=new URL("../icons/S/shapes-thin.svg?v=fdea82577950ae47e0e2dac53bd7a3e5c23164f474e434ed1e109abc32cdb55c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
