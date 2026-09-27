export const name="tv_options_edit_channels";
export const id="dl_2ec8a9818e3a57a24ce3";
export const url=new URL("../icons/tv_options_edit_channels.svg?v=2a3473b34715429e237c4a27c4335fe6969ca13b5307d856d2ff180afd0e5402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
