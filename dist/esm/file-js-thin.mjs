export const name="file-js-thin";
export const id="dl_74dd3a4880104f1b9a0a";
export const url=new URL("../icons/file-js-thin.svg?v=e665c3442f7b82ec2779c2acfab8a7898cbcac9c82ee9fec6b92301dea6fa941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
