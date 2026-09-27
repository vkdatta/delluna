export const name="video_stable";
export const id="dl_4fa39cc839fbfda0915e";
export const url=new URL("../icons/video_stable.svg?v=fc77b7e59b2f0f4198b53faacce97f67c2270b5057b6c35627651872fe5a7f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
