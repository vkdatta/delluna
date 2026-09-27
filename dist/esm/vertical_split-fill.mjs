export const name="vertical_split-fill";
export const id="dl_7b700eeca03667635d00";
export const url=new URL("../icons/vertical_split-fill.svg?v=7b282b2aa9a39e7e0556e4832c5213fb29fda7cfe81bb97a93690690163ae763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
