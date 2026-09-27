export const name="meta-logo-light";
export const id="dl_f19a33fec9b5486b8033";
export const url=new URL("../icons/meta-logo-light.svg?v=57ed65fe461088b5fe7ddb7e7dcb7dde2d061489b117b7f7c6b79beb28a2d7c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
