export const name="fit_page_width-fill";
export const id="dl_2c8bb1a544bd0caf2e8c";
export const url=new URL("../icons/fit_page_width-fill.svg?v=a53b26826217216f2c384c803b857fb9af07e78cf3af4195479db0e872b3ef7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
