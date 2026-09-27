export const name="takeout_dining";
export const id="dl_7a201b9cd7ec66705b08";
export const url=new URL("../icons/takeout_dining.svg?v=df20f86291bd919b7603df5354a9f224e9d6c706543088087d027f4eaf76a486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
