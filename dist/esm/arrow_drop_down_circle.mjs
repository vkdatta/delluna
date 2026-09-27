export const name="arrow_drop_down_circle";
export const id="dl_2ad1c84ff2dc3d6dfa2c";
export const url=new URL("../icons/arrow_drop_down_circle.svg?v=b9d905d4fa8fce7ee957446d24e59148037568d74f302bf183b815da08e96fa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
