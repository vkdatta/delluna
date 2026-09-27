export const name="gender-transgender-fill";
export const id="dl_542ab075fba54632a490";
export const url=new URL("../icons/gender-transgender-fill.svg?v=ed4c9feb93296f84cabd87989a88ba0db09540f0a5d607c722ad78c42cc37614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
