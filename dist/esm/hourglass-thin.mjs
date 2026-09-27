export const name="hourglass-thin";
export const id="dl_473af89d795042a481eb";
export const url=new URL("../icons/hourglass-thin.svg?v=cb6da2a6166da311fc6d2af266938a632e61c7013cafe7b332fa8e1c1aa52928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
