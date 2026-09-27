export const name="replace_video-fill";
export const id="dl_26b0545db96fa90f272d";
export const url=new URL("../icons/replace_video-fill.svg?v=8ffe7f94118cfef4548b0c49af9937ee4dcfbdccd44cc9d6a514da423bfa8d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
