export const name="airplane-tilt-thin";
export const id="dl_9ac91103b47044889cf8";
export const url=new URL("../icons/airplane-tilt-thin.svg?v=8f82a3f9e5350ff31b46d4fe8647045e849dc65db43c971a4629355860541150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
