export const name="format_strikethrough-fill";
export const id="dl_82c430fc6721fdfc6b70";
export const url=new URL("../icons/format_strikethrough-fill.svg?v=c3b4552ed4bf69f5481a68cd57f9b96bf74a77029aa985eb1444618968e5bae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
