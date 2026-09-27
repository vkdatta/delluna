export const name="needle-thin";
export const id="dl_c01637509b954af9ab29";
export const url=new URL("../icons/needle-thin.svg?v=7175f5ffd2c9b1c40ee4e44ccf459a4716feb4edd20e9b88b70d28eede149d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
