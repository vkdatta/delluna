export const name="skip-back-light";
export const id="dl_72fb4918e1027855bbc1";
export const url=new URL("../icons/skip-back-light.svg?v=c624c502a9c599e3a65f294a5a785a78c4a79cf6079b6e092216f41a93bf2c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
