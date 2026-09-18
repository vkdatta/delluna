export const name="thumbs_up_down";
export const id="dl_79000f0d093349a4a628";
export const url=new URL("../icons/thumbs_up_down.svg?v=d86fa60c7a60060b4f880272d388ac2b3b9d0522050e66f4ab1c503c58aac63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
