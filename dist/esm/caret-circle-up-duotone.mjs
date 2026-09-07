export const name="caret-circle-up-duotone";
export const id="dl_0800cd06833147e7893c";
export const url=new URL("../icons/caret-circle-up-duotone.svg?v=76d221daf83931eaca8f439cf0f4efae5db7789a3db75dca0cdb358f7a8ccaf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
