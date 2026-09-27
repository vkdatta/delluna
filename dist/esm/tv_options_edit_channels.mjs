export const name="tv_options_edit_channels";
export const id="dl_4e33a15cbf21423d5396";
export const url=new URL("../icons/tv_options_edit_channels.svg?v=68f3ac59d1fdcaf19a88c692a38b8e87f012143eac3a02fd8f0f2762f85de74a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
