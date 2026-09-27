export const name="file-audio-fill";
export const id="dl_6dbc9c30df7c4e5e8e4c";
export const url=new URL("../icons/file-audio-fill.svg?v=89b65be4e32fe7f1fbb11033c6608a4ab3fd9c88886ad2180725945dc209d633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
