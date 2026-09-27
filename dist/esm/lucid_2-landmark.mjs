export const name="lucid_2-landmark";
export const id="dl_d37a4d135e8344e48724";
export const url=new URL("../icons/lucid_2-landmark.svg?v=f5602e424daf63be2a852e68c2e226521ea8ce9dd0843b8f8a4d7271876fc75a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
