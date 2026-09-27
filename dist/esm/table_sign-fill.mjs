export const name="table_sign-fill";
export const id="dl_21e31d96006fd61f1d8a";
export const url=new URL("../icons/table_sign-fill.svg?v=3d3ae2a21bef3692e4092ac19cc90b0d4e4e71b7e4aea7cd53afe7358abbf674",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
