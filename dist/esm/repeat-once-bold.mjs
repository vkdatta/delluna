export const name="repeat-once-bold";
export const id="dl_0bdb4063593d49fdba5d";
export const url=new URL("../icons/repeat-once-bold.svg?v=2ef0f4dda13853c4cdaabdeb9de0f27a72c720a87c7f0b19c04fd52c91f45ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
