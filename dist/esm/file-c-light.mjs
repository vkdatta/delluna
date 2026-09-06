export const name="file-c-light";
export const id="dl_fc31732803be421ab17b";
export const url=new URL("../icons/file-c-light.svg?v=c93d638a8acb7c21aa8cede176433c9964ce588b3e6cae4b00ad16de55462d12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
