export const name="file-md";
export const id="dl_12098c4b11a7444eae55";
export const url=new URL("../icons/file-md.svg?v=4f2fa8a2d2764a35d073f335687eb1d062ddf7fc9c2abf067e77d5eecf312bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
