export const name="toys";
export const id="dl_8dbbff0a604148d29d26";
export const url=new URL("../icons/toys.svg?v=fed770780cc4879642da00518487241edc5474aeb0bb09faf916e1de8f99ac6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
