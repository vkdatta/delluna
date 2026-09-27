export const name="connect_without_contact";
export const id="dl_246790d274a7d6f8e719";
export const url=new URL("../icons/connect_without_contact.svg?v=f45aadb7f81c7aa7da1999d18c32baf012f4abab4453b67a2776ffd44afa4edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
