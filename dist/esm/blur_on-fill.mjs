export const name="blur_on-fill";
export const id="dl_2aa0cf682d2e9b613172";
export const url=new URL("../icons/blur_on-fill.svg?v=eec560c81bf2f31d76a24f0cae39e90e0efc169ca5b80f27681c87c70840f06f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
