export const name="video";
export const id="dl_5944b522f0b848b18b94";
export const url=new URL("../icons/video.svg?v=81e410522390729cbc419ab0ca3bb8334174f99d2dd64de2c34d9a49dec84e99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
