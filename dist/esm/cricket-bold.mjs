export const name="cricket-bold";
export const id="dl_7aabbf5933f043dcb061";
export const url=new URL("../icons/cricket-bold.svg?v=8b6304aa00d939a3e888798c8f81c87f556cf1b8976a1b504c4074dcc186c6a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
