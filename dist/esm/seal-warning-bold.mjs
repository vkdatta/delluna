export const name="seal-warning-bold";
export const id="dl_39971cc3c3bc4a54401b";
export const url=new URL("../icons/seal-warning-bold.svg?v=bf41d73431ab9369c26631057c4250544d38ffd5f8328bc1f43d8b8315fdca77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
