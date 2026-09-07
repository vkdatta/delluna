export const name="square-logo-fill";
export const id="dl_00508073a7e54f2a91e7";
export const url=new URL("../icons/S/square-logo-fill.svg?v=72406ce9de996ccb6c082b7f5d54312f09f2981f9db122b41d794b87e1e45437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
