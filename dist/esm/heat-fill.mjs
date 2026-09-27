export const name="heat-fill";
export const id="dl_57e1e6763349424186d0";
export const url=new URL("../icons/heat-fill.svg?v=849e902000a47554625dd0986dc8055e736c9cdd23e20738b7c54c556b9ad066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
