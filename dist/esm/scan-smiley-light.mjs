export const name="scan-smiley-light";
export const id="dl_2df8a799c52064e8ca11";
export const url=new URL("../icons/scan-smiley-light.svg?v=4bbf3e2c4b0d40380332c15f0190bf92662bf08161471e4d10f6353c6a2d21b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
