export const name="apple-podcasts-logo-bold";
export const id="dl_cb0b141517614e45becf";
export const url=new URL("../icons/apple-podcasts-logo-bold.svg?v=05fa2e626a7c0b7dcd37aed47ac86359b9d0c193a9c077edd673dc03be1b5639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
