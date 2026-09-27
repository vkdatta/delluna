export const name="film-reel-thin";
export const id="dl_bc4a6e8141794aec8a5d";
export const url=new URL("../icons/film-reel-thin.svg?v=956d81c4a3139469e9abf8f3a57cd63edd17cb30e475893685c9d134bc6515a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
