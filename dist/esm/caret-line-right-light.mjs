export const name="caret-line-right-light";
export const id="dl_a60ca874260e4a0087a9";
export const url=new URL("../icons/caret-line-right-light.svg?v=e49f3b497685f043003a61fc2d7e38e22dc09a616f85604e434fa32161f82514",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
