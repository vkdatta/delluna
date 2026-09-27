export const name="file-rs-bold";
export const id="dl_a1df0a52c1024307877c";
export const url=new URL("../icons/file-rs-bold.svg?v=9de9c5f1eb9821a6dd73605333d721f4c6cec55911ee969bdfff74e48ad120c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
