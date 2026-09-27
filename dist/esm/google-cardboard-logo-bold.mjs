export const name="google-cardboard-logo-bold";
export const id="dl_2d8675bdb0bc45a284f8";
export const url=new URL("../icons/google-cardboard-logo-bold.svg?v=baa3b8a37c99b6dcf0377fb8217775823ba5a0e0d2ae027a8d97c11a13167c38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
