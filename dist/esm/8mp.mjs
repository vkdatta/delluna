export const name="8mp";
export const id="dl_4cf77dd4ad2cf4e75027";
export const url=new URL("../icons/8mp.svg?v=0cf5ca58fe5bdfbb4298573de5a6b01894d6b0fc26210fdf10db9a916d6d1af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
