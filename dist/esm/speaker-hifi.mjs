export const name="speaker-hifi";
export const id="dl_655d6a8314d3e4879155";
export const url=new URL("../icons/speaker-hifi.svg?v=98dd776c3d5865477b189748846e37cce07a1350483fdacb470858e7bd952c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
