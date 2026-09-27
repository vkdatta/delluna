export const name="sliders-horizontal";
export const id="dl_d1ef53101fb579ff199a";
export const url=new URL("../icons/sliders-horizontal.svg?v=aad2c6f6c7a336be4a49bf379ba04bdc17122240d50c61741e552370769c7a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
