export const name="comment-fill";
export const id="dl_2a600d99229940f29706";
export const url=new URL("../icons/comment-fill.svg?v=bf21ae45284fd0234103c3148069d19fabaf69910b108435ba6e235d05b0b82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
