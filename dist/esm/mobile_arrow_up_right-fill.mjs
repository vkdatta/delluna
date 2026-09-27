export const name="mobile_arrow_up_right-fill";
export const id="dl_af2ea5036ad33a827eb2";
export const url=new URL("../icons/mobile_arrow_up_right-fill.svg?v=cea45e79461e8683fbb23b17c52cae4c25766e6e5a64e99600e5212f08b1e4a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
