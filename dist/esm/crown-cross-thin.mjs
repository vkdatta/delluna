export const name="crown-cross-thin";
export const id="dl_1f3e743efd9b474f8bec";
export const url=new URL("../icons/crown-cross-thin.svg?v=6ef9230570f5f88e418232646da4348269df98c2206504e354c728eaffae5790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
