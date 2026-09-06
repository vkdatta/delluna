export const name="lucid_3-shelving-unit";
export const id="dl_0d24cfea4919468c938c";
export const url=new URL("../icons/lucid_3-shelving-unit.svg?v=1c9dc63d9e11735c81b4b787dd2419b5b8408b128c5179039a4a065f4a9bfad7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
