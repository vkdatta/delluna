export const name="file-rs-light";
export const id="dl_66cac8fb708544deb75f";
export const url=new URL("../icons/file-rs-light.svg?v=6c60820b5c10b70650a594487b7206896297f31debdb633711f1253da18c57fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
