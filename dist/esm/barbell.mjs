export const name="barbell";
export const id="dl_b6f6242bb8624cfb97d1";
export const url=new URL("../icons/barbell.svg?v=851e9306a9f7405e42d446bb21e76e9fb89f00f0c94f502e83b5a253cb311bca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
