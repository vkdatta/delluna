export const name="flask-duotone";
export const id="dl_d491721033a94c8683c1";
export const url=new URL("../icons/flask-duotone.svg?v=80b65250a7235e4e3d1c2fd3111e1a78262540ee13fc07cca13eb62fcd5980d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
