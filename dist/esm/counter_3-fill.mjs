export const name="counter_3-fill";
export const id="dl_80043724cc59465fb483";
export const url=new URL("../icons/counter_3-fill.svg?v=f838694e00980fc4e3f1c5b21f513c79e43b90f92536464c10c8eb764b3bd717",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
