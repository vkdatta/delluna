export const name="google-play-logo-light";
export const id="dl_e9ccca373b2d4787b17e";
export const url=new URL("../icons/google-play-logo-light.svg?v=6a23893777f7a39a422aadbf120151b16c6fae4d3dbbd074c048633f98e1c427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
