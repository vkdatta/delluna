export const name="elderly_woman-fill";
export const id="dl_562f309b9fb1a327106c";
export const url=new URL("../icons/elderly_woman-fill.svg?v=697d3f9ba5ab1e3c5d1879520446da614c95d316e0d36946e82bb73dbbeed6b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
