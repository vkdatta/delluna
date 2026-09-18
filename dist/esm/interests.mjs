export const name="interests";
export const id="dl_a247aac822f5484585f7";
export const url=new URL("../icons/I/interests.svg?v=1eed4e856a135856f457fc5ff761e8978614699a77da5f3cd6214b9c2dd9c448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
