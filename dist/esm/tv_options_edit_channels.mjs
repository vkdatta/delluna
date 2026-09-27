export const name="tv_options_edit_channels";
export const id="dl_c0a37a3c6a0fcc4cead2";
export const url=new URL("../icons/tv_options_edit_channels.svg?v=b4d026bb429b50fb3b1a45854a2e83cc4eaf6a632c3476e126b26de0c8c3ed08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
