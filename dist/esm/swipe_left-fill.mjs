export const name="swipe_left-fill";
export const id="dl_ecc9ca4a4652c6587cda";
export const url=new URL("../icons/swipe_left-fill.svg?v=10fea451b55e0d81dc6fdd7308be59095cde0bf9cd58fc04e88da2bf8a096b86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
