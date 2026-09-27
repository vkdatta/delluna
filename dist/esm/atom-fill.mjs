export const name="atom-fill";
export const id="dl_920bf252c6e34775ab50";
export const url=new URL("../icons/atom-fill.svg?v=c66beefe794f1bc5812927818f1316d7b53a43420f37b8d3321721b3f2d07c9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
