export const name="lucid_2-form";
export const id="dl_9f36579fad2b482fb263";
export const url=new URL("../icons/lucid_2-form.svg?v=747b3f3f3df96c174b438206d24064df05059814bfd521a2eacd7a29318314e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
