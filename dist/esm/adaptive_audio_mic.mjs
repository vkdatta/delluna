export const name="adaptive_audio_mic";
export const id="dl_eb125dbbbc3f0b3a2103";
export const url=new URL("../icons/adaptive_audio_mic.svg?v=09a45763a3c73d5e646248808866a23983661bab98a05e5311ed61ec269df987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
