export const name="arrow-u-up-right-light";
export const id="dl_bca35b4a1dba47888b53";
export const url=new URL("../icons/arrow-u-up-right-light.svg?v=723b64fbb9a4a1b586c7b15b03e5c84c4bf2dac34d11625a7a7d23c259704f0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
