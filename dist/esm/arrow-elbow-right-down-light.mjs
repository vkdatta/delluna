export const name="arrow-elbow-right-down-light";
export const id="dl_574cf7c990fe4631abc4";
export const url=new URL("../icons/arrow-elbow-right-down-light.svg?v=94d143fa336d76c3af304e05b187aaf3e5a412b0c56d13a80af800ad56817910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
