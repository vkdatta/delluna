export const name="running_with_errors";
export const id="dl_ebe88c700d3d486eb251";
export const url=new URL("../icons/running_with_errors.svg?v=630046692cb781203902e3d9129c21242e3f1a39666f9f3642ba7bf09d98967e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
