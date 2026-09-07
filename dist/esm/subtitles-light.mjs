export const name="subtitles-light";
export const id="dl_39e659ed1cba44b78527";
export const url=new URL("../icons/S/subtitles-light.svg?v=ffe7599b8584a5242a8bc074dac4082ecfb7d4dcec6791287470d5bc7afa169a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
