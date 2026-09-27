export const name="bandaids-duotone";
export const id="dl_8a4d13e939994c6999d7";
export const url=new URL("../icons/bandaids-duotone.svg?v=ee7a07de1a7fc8b51b721c131bcd0bf8e059412c8560f58384538b97195b5dd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
