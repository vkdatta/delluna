export const name="phishing";
export const id="dl_1bddc8953374b48ead00";
export const url=new URL("../icons/phishing.svg?v=cdbf62a7aba6d7d57e913acd31c6f7a8220f26c24097bc3659a1b898a63ab2dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
