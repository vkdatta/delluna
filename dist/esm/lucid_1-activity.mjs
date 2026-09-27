export const name="lucid_1-activity";
export const id="dl_48d533dc4f5e41528e99";
export const url=new URL("../icons/lucid_1-activity.svg?v=c54f6d84cbfa0e8b0750d639e37116ee3d6e9859b7d36faffe550cddb9da8c45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
