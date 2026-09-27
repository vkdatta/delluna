export const name="hoodie-fill";
export const id="dl_17a217bac6e946d1941b";
export const url=new URL("../icons/hoodie-fill.svg?v=41dd3827831d41542d758acaea42c7e505bebf1483fb59082c19ea9fb195b36a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
