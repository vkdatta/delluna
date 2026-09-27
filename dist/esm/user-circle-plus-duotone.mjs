export const name="user-circle-plus-duotone";
export const id="dl_68c20e39e38c61c0aec2";
export const url=new URL("../icons/user-circle-plus-duotone.svg?v=0a4856a70c2c33456be96416799f05ad72458c9780f98935d6f827b6c45cfb0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
