export const name="star-four-light";
export const id="dl_865b77dfea75481794de";
export const url=new URL("../icons/S/star-four-light.svg?v=27f839bb2a99b515f9b6f0837d35dfafae7d7e219c03182f952104f81b23c37a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
