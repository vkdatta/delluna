export const name="arrow-elbow-up-right-thin";
export const id="dl_55ee4127fe234874bcb9";
export const url=new URL("../icons/arrow-elbow-up-right-thin.svg?v=14b019f4cfeed735a53f5b5960ecfd2a49c0ab4c3778467024da6826655cdf00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
