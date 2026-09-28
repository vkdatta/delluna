export const name="line_axis-fill";
export const id="dl_50d5522f9f99ee7cb56c";
export const url=new URL("../icons/line_axis-fill.svg?v=651271eac058321247d6f0cf20666599100343fe70591e67f7a9c5ee8866a8e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
