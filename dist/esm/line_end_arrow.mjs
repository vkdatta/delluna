export const name="line_end_arrow";
export const id="dl_8e1f87150d7d8e30c857";
export const url=new URL("../icons/line_end_arrow.svg?v=aad5e7c9a216f6399e044da76fa2febf6507b58ef35405750372c9c331bf3524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
