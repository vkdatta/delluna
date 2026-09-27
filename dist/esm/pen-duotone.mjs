export const name="pen-duotone";
export const id="dl_c8d31be94a7747fabfac";
export const url=new URL("../icons/pen-duotone.svg?v=ad1b81be59a98ac21685abb5cb9b258bcadf4cec10b9943795de6b143b33c197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
