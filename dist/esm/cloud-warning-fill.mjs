export const name="cloud-warning-fill";
export const id="dl_4f98e0c2cb1849ada8a8";
export const url=new URL("../icons/cloud-warning-fill.svg?v=ba25e2bfa87d801c215c438d8df96a7085e92bc2f7bd466a0e2700da8bb82649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
