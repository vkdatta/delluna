export const name="arrows-in-cardinal";
export const id="dl_056c15b6c4fd42c89717";
export const url=new URL("../icons/arrows-in-cardinal.svg?v=6019cb6a497c9fe8be688af81c395d06379829a77d97cf9d1f381dbeef222749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
