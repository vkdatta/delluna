export const name="matrix-logo";
export const id="dl_10ef967d313a4eea9219";
export const url=new URL("../icons/matrix-logo.svg?v=9f90e54a4cd9d777b4ee8fe83e36fda1022b283c06fd1fe3a97c343d92493b2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
