export const name="female-fill";
export const id="dl_7a7a4d41e5c41d07756c";
export const url=new URL("../icons/female-fill.svg?v=243f8785ca03eefc54a3db62658f9328638987a68eaaf685936f6c372a251df7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
