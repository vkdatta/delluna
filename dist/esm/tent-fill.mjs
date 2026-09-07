export const name="tent-fill";
export const id="dl_c9e4458f7c4247e58a00";
export const url=new URL("../icons/T/tent-fill.svg?v=451e06f7a577e4097f140aa3673eafa2204b0d6588392b587292870f2d3f9d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
