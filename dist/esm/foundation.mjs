export const name="foundation";
export const id="dl_d859d4e2aa47370ba292";
export const url=new URL("../icons/foundation.svg?v=4d63911b9fec50f999cb63a5c58f52d042f4508359a3db9d6b29f4ee9f510a19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
