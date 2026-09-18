export const name="mark_email_read";
export const id="dl_e109daed80a540ce98c6";
export const url=new URL("../icons/M/mark_email_read.svg?v=b678e40280da1ad01c04d1985317356870c1452a05561e7c85f9be055dea804c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
