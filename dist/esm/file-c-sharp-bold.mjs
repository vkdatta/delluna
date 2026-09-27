export const name="file-c-sharp-bold";
export const id="dl_b6d80a1499ae4f4d8a66";
export const url=new URL("../icons/file-c-sharp-bold.svg?v=0c5a533d7045606ae695187e8acc0c0a67c5eb6a4f326b0c0144e475f2e46987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
