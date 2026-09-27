export const name="google-logo-bold";
export const id="dl_4d3b0e34e72a41f28e32";
export const url=new URL("../icons/google-logo-bold.svg?v=18b75167212ba46e36d1bf82751a91fc0daf13bc47a605555e82f5a452ba72a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
