export const name="user-round-check";
export const id="dl_e2c37f8fbebb4822b60e";
export const url=new URL("../icons/user-round-check.svg?v=9bd223b3881d93d784eb7c72246f72778fa75a3a7a9c8de26e35b33c7838e959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
