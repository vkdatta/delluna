export const name="sort-ascending-bold";
export const id="dl_66b1ec8c65b847d090ca";
export const url=new URL("../icons/S/sort-ascending-bold.svg?v=e05ac51d0e2afb75836e87f009c98afe02280e581508f7e7439509d12423119b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
