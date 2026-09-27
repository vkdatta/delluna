export const name="lucid_2-layout-list";
export const id="dl_54af2e24e50344309029";
export const url=new URL("../icons/lucid_2-layout-list.svg?v=56b639c47bbaed072c4141ba6f4f607e25580b288571fe7d391c54cdd53bac31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
