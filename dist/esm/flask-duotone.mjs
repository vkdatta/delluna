export const name="flask-duotone";
export const id="dl_d491721033a94c8683c1";
export const url=new URL("../icons/flask-duotone.svg?v=760bab0e841a1469f372f169e3f75078c14e119cce323e851e43bd2648be355c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
