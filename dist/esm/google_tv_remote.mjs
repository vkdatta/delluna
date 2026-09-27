export const name="google_tv_remote";
export const id="dl_ccc7ded01e5e91b28389";
export const url=new URL("../icons/google_tv_remote.svg?v=71cbf13f4a94ad423127b098fd3c80023b36100daed1900b0ef09e9c9ee940bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
