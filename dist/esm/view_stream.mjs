export const name="view_stream";
export const id="dl_6adccc3abaf4e75a87be";
export const url=new URL("../icons/view_stream.svg?v=a152d6cd580f895eebf48c2000bca7c1240416696c620e9c1bcf921e375f1de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
