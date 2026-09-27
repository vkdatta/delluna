export const name="mic";
export const id="dl_6c4d1e4f3a5416ddbb7a";
export const url=new URL("../icons/mic.svg?v=e4f97d8bcc3c363cdcf054e6e4ae3d00dc5adec031797d99f2af63f09e1d646d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
