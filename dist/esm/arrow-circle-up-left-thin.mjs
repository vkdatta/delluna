export const name="arrow-circle-up-left-thin";
export const id="dl_5b268098f7ab409d847e";
export const url=new URL("../icons/arrow-circle-up-left-thin.svg?v=14012f04a3f896ba2d8e31d718a2d9eb387113520cb60db7e714887fb578b6c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
