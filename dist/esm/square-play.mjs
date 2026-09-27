export const name="square-play";
export const id="dl_d2c0defc60124e2f8b35";
export const url=new URL("../icons/square-play.svg?v=6a52eddeac5fe3ffd38d5361612a6e686cd12269c437778c6a2beae8a4506366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
