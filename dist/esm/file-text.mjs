export const name="file-text";
export const id="dl_4035574327304ac2874e";
export const url=new URL("../icons/file-text.svg?v=9a580a038cce9f6dd223597864abe1b5c5c03bf8176d2f7171574598468b16f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
