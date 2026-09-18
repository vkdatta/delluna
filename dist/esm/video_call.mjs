export const name="video_call";
export const id="dl_1a8ade7f6e644f9090f1";
export const url=new URL("../icons/V/video_call.svg?v=0fde3f9e8fc7321285ab5babdf8016ff5c1da3c54445924490300a262eee4380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
