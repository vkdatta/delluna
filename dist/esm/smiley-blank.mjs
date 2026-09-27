export const name="smiley-blank";
export const id="dl_1ead8594cbd9da759a3c";
export const url=new URL("../icons/smiley-blank.svg?v=440abfd5e039831f3169e295631427f40f2f77ab22f529973e213154333b162f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
