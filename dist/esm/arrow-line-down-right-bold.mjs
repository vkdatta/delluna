export const name="arrow-line-down-right-bold";
export const id="dl_072f0552618e431c9e4c";
export const url=new URL("../icons/arrow-line-down-right-bold.svg?v=ebeec558bb5625b7b29df450b586c4fd3b7c6d278437aa612ea7ead1c2e94ffb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
