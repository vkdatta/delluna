export const name="add_alert-fill";
export const id="dl_fd4765d063ffc2f8dbe6";
export const url=new URL("../icons/add_alert-fill.svg?v=324b20a91701ddc787a678c1038f860f8a3135547e5883563daf1eca0b106481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
