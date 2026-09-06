export const name="gradient-bold";
export const id="dl_dd44df090f504e09a8ea";
export const url=new URL("../icons/gradient-bold.svg?v=59f7b255e470829d9266c6aa5e7163f05b49a7acdad2f8f45f914eb32b181e27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
