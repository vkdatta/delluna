export const name="align-right-thin";
export const id="dl_57310beea56d4508a1e9";
export const url=new URL("../icons/align-right-thin.svg?v=dc2f6c15ea84bbe17fc6880acaa818602ab4ac84ba3d68f2f4ca3bb5125ff194",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
