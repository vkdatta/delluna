export const name="swords";
export const id="dl_c23145dae737400ab034";
export const url=new URL("../icons/swords.svg?v=430c99df5f72ef0612a21635fcfc2101d01cbde12d1dc93765d42dd9f79fe2b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
