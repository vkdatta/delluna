export const name="lucid_2-list-clock";
export const id="dl_4b2004de5daa4a82834e";
export const url=new URL("../icons/lucid_2-list-clock.svg?v=c290dfbc69f3d4180094514a7eef84dc239528a76a981e58063fb23f836464e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
