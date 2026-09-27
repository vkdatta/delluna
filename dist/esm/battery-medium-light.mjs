export const name="battery-medium-light";
export const id="dl_0ba70f789fc24d81b2db";
export const url=new URL("../icons/battery-medium-light.svg?v=829584527eb130acd9b7a51d77e99800312043c74468a254c61b7325e1d4f30e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
