export const name="compass-rose";
export const id="dl_783b3049a1d44df49b34";
export const url=new URL("../icons/compass-rose.svg?v=9f205da79f023ec525d745fa2c1e53af5ab250dccf46e35cbf1b5b2f76a73c88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
