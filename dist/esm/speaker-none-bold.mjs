export const name="speaker-none-bold";
export const id="dl_263c1d4647855e9e5a1f";
export const url=new URL("../icons/speaker-none-bold.svg?v=8a53938d75d4b30b5362a1a9219e51d2ea723559f1445bd55796160e81afbccb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
