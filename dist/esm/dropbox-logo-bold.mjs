export const name="dropbox-logo-bold";
export const id="dl_f3b268d6562c4ea18b5d";
export const url=new URL("../icons/dropbox-logo-bold.svg?v=2ada78ca51c2c0ae3c758e1281610ebbd333ab63536d8b22248d7d93d6b51a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
