export const name="prohibit-inset";
export const id="dl_e1dbaab0fadd49649d86";
export const url=new URL("../icons/prohibit-inset.svg?v=2e5f7a14e467099bb0fe24f37f46987089a1d5579f1231f14271cfd9ba17e19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
