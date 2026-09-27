export const name="arrow-fat-lines-down-bold";
export const id="dl_fd490ae0349a4b5b8c3b";
export const url=new URL("../icons/arrow-fat-lines-down-bold.svg?v=e16125d4d43674e53f7aad813c3ba085b77521b072e8f92a6a40b1fe04d2f25c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
