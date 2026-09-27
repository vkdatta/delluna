export const name="text_rotate_up-fill";
export const id="dl_cbe025ffa5cf326a34d2";
export const url=new URL("../icons/text_rotate_up-fill.svg?v=cc4714aa4ffc294d1d7b7fbd41f6925a313c10098b6169d7f99d26d012c510b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
