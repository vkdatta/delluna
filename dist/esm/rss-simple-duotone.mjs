export const name="rss-simple-duotone";
export const id="dl_42004ce6ccf34d9eb68e";
export const url=new URL("../icons/rss-simple-duotone.svg?v=aee3a9ce7b4b51e20a93ed29b5b232db88724c7ea28c6f55f56989abdd6af24f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
