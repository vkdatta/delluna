export const name="attachment";
export const id="dl_44493e76bb7e45209fb7";
export const url=new URL("../icons/A/attachment.svg?v=230dbe38ca545cd9d57c42498ef87d54a454b618887df23f7ea23871b7878171",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
