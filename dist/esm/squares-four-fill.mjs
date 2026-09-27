export const name="squares-four-fill";
export const id="dl_8c57fe5c0db20e2a0374";
export const url=new URL("../icons/squares-four-fill.svg?v=001b9a2935aa85b947b242ea9ba3c2cf98c501c0da2ca923203377c37265a12e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
