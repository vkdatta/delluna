export const name="jewelry-fill";
export const id="dl_2978bc4bd0b44b8a289f";
export const url=new URL("../icons/jewelry-fill.svg?v=53274a897b52c4cabadc1e0220adccf1a5d1115e125d6464342e5aaf6eedc1df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
