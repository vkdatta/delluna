export const name="square-split-vertical-light";
export const id="dl_2e53d155d4974b26a63a";
export const url=new URL("../icons/S/square-split-vertical-light.svg?v=a2b17661b7579c24a53afedbfd691cfebad2f8242475e89ff67d097f548c7d38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
