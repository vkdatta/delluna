export const name="attractions";
export const id="dl_7d088f555c91b58f84cc";
export const url=new URL("../icons/attractions.svg?v=75d194de2a4d7af92ecdece6433439ee7d90958f4c017c8b8ef140a7bcb4004f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
