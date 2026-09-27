export const name="font_download";
export const id="dl_a6b9c404530e8b48b972";
export const url=new URL("../icons/font_download.svg?v=abcacf0e98e3bf6d70a3e6a030f4352e4382944dbe362d5234e71116d62996b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
