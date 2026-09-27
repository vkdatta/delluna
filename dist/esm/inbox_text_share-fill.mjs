export const name="inbox_text_share-fill";
export const id="dl_934884d2c0b5cf00177b";
export const url=new URL("../icons/inbox_text_share-fill.svg?v=db5e90289d31e6efa802acf7a9cc435226cbda8a4e8e553eb2f6baa53630b943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
