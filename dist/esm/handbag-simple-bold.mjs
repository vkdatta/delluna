export const name="handbag-simple-bold";
export const id="dl_967101e0723f437f90cf";
export const url=new URL("../icons/handbag-simple-bold.svg?v=c19752bd0bf4cd54543d942112aac14a82ff04ec3b81fee2c22a7a48e2daf101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
