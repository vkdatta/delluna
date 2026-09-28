export const name="person_off";
export const id="dl_22ae3e21fd6d2732d4c8";
export const url=new URL("../icons/person_off.svg?v=b52b781272e8b96aee6fcfe1f6abd1362d97a8d12e8a6dd6f0448af81b085edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
