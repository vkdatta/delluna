export const name="arrow-u-down-right-bold";
export const id="dl_81d7031343f947d88090";
export const url=new URL("../icons/arrow-u-down-right-bold.svg?v=d6e225d2e1aa78ba05f909b949f99e87e5dee58126b85b20533248dd6d908e63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
