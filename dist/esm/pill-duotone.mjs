export const name="pill-duotone";
export const id="dl_a00db75955624a80866d";
export const url=new URL("../icons/pill-duotone.svg?v=6221d6ff170ed8968322929de181b427b55f24eb0a6947a74d5b0e408d8f45ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
