export const name="hard-drives-duotone";
export const id="dl_704ba84a54474daebec2";
export const url=new URL("../icons/hard-drives-duotone.svg?v=3abaf3560cec2a30d58184e8a072f5cc42e0fddbdf1cdf7237e9ab4967f593f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
