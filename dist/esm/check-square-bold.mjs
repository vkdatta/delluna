export const name="check-square-bold";
export const id="dl_fa70426aee6548a2af3b";
export const url=new URL("../icons/check-square-bold.svg?v=6981d48a5925977930ffc6ee25a09ff65d4a07919e5ebf2a6aaf634578b68414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
