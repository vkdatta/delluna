export const name="text_fields";
export const id="dl_948b3b2c74c2ebf1f866";
export const url=new URL("../icons/text_fields.svg?v=3da404b8d35b05b7b594ce30436b93dc63fa3280fd3e0267863080bf9a5ee1f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
