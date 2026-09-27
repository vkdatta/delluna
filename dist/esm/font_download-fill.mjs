export const name="font_download-fill";
export const id="dl_9190bca16e09e872b56e";
export const url=new URL("../icons/font_download-fill.svg?v=5dd7f99033f13dbcd11ddb76f1719cadafdc99c45087309b607a54df4ff888e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
