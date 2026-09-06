export const name="crane";
export const id="dl_7429544e546a4ef79e47";
export const url=new URL("../icons/crane.svg?v=02ca4e1648601cc6ef627e2a137936f50f10021f71e2f7efe4d4a2efa9189745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
