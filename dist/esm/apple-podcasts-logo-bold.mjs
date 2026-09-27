export const name="apple-podcasts-logo-bold";
export const id="dl_cb0b141517614e45becf";
export const url=new URL("../icons/apple-podcasts-logo-bold.svg?v=96784a3ff366ac7a8bf7b6f0eea44400b45bea0bce81a5cbde8d1d66dd2f1162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
