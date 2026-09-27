export const name="link-simple-thin";
export const id="dl_0db9c2237c5844af979f";
export const url=new URL("../icons/link-simple-thin.svg?v=9a79316fd455e35fbb9b73166492ddaf1a76ba54c48bbae77390840dda0ec3df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
