export const name="history";
export const id="dl_d0cd7818bdb0a3174c2e";
export const url=new URL("../icons/history.svg?v=ceb0a1a0cc270e680d0a37ddae486ffa4a9b0a803560b154fe004c0d6e280dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
