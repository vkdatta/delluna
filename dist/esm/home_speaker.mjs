export const name="home_speaker";
export const id="dl_76e1ead028cddbfd74b4";
export const url=new URL("../icons/home_speaker.svg?v=42fdbb96d96614c8dd9b3a728c3a4156d4fa6c7525e5cd3d65ecf98fb3287e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
