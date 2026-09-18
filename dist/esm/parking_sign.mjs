export const name="parking_sign";
export const id="dl_56c210ae0a42465684b5";
export const url=new URL("../icons/P/parking_sign.svg?v=343cc06423d7afd81f17955a812cba26562af20682af227a4539aee4b0188692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
