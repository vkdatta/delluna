export const name="octagon-light";
export const id="dl_1687962d9c59467bad8d";
export const url=new URL("../icons/octagon-light.svg?v=4f7bb14ece932989a85ad880e143d4e5a029677e41df013d8b8f0ba534620327",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
