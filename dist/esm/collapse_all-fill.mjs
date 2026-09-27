export const name="collapse_all-fill";
export const id="dl_f054f42a52bbce52fb51";
export const url=new URL("../icons/collapse_all-fill.svg?v=fb7333d0a870927c1e22d6c52e9441a8d74b0a03de1beed64a84c01d3f9dce94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
