export const name="airplane-landing-bold";
export const id="dl_3c3c0b8ec93f4357b2d1";
export const url=new URL("../icons/airplane-landing-bold.svg?v=7ad9fd4b0ba6e75aaa94b2b89a95c05224bfc8508aa458f25a0af2d4a2e21243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
