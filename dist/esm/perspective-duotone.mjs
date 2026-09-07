export const name="perspective-duotone";
export const id="dl_5e266d6dc89f409eb870";
export const url=new URL("../icons/perspective-duotone.svg?v=318d7f22a58a40d6f8692924e316165ef03b4b7f724b316a0f79bdc2586951e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
