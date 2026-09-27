export const name="facebook-logo-light";
export const id="dl_ba838aceccae4018a07c";
export const url=new URL("../icons/facebook-logo-light.svg?v=e9b701b6938832421e9badff2a7c0b74f2442e54e294fcd15ccc385eaa79519c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
