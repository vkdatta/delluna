export const name="google_tv_remote-fill";
export const id="dl_590b5b002cb3e6b45ceb";
export const url=new URL("../icons/google_tv_remote-fill.svg?v=55f96aa22c20e2ac5d3592712de097590499b73ec99894c17099f27562ba9167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
