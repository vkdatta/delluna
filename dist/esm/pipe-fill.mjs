export const name="pipe-fill";
export const id="dl_fc3359c44fa84983a0a5";
export const url=new URL("../icons/pipe-fill.svg?v=1c9ecd085eccb77f80f6a982393b3546dcdf30b6d8b50095e5af5320b6f5f12a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
