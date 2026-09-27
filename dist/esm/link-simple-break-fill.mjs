export const name="link-simple-break-fill";
export const id="dl_5a2ca645c57049068078";
export const url=new URL("../icons/link-simple-break-fill.svg?v=95354fe603454130ec95f80b2ce26a25dc41c0ab74556c6cb0a88066ec67c3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
