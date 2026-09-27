export const name="edit_audio-fill";
export const id="dl_6ef2fd91f00674ab283e";
export const url=new URL("../icons/edit_audio-fill.svg?v=e829469478ec4947e4b6a88173705bface947f5d89d72891956eedda2bdb3879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
