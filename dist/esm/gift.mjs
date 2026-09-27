export const name="gift";
export const id="dl_4e59b39a6bc9474eab8d";
export const url=new URL("../icons/gift.svg?v=dbfc7c3db7cd2a92751728e2f740926afa159f8dcfe667f79f07582543bb982b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
