export const name="read-cv-logo-bold";
export const id="dl_bad318bb5fe248559d86";
export const url=new URL("../icons/read-cv-logo-bold.svg?v=73b78d40c904cdc67472acb0277893ea16e62dee9b463dc2d7f196c04443a00a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
