export const name="arrow_back_2-fill";
export const id="dl_6348c8b33bdbdd6f09dd";
export const url=new URL("../icons/arrow_back_2-fill.svg?v=54cf2bd8de794ddd8c2b97955a25e93ea394b177753ae4476387da3a76baa517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
