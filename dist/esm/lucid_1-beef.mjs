export const name="lucid_1-beef";
export const id="dl_163f5b41330a4681a94a";
export const url=new URL("../icons/lucid_1-beef.svg?v=72118c29f670876120591fc5df4bce934e079b4fa49fa19f24389aefbd3a34b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
