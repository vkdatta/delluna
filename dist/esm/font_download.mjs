export const name="font_download";
export const id="dl_04ded568a102443ca53d";
export const url=new URL("../icons/F/font_download.svg?v=a21c2c588c71e7333a32e704aeaee54efeae833e9e7e9fff71e6f72de531e0d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
