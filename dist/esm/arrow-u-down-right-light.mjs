export const name="arrow-u-down-right-light";
export const id="dl_f1a0f2993e504379ba22";
export const url=new URL("../icons/arrow-u-down-right-light.svg?v=40ecd5501af86d0f89f0374579f987ff11123274fc5621a6e8ee01dd72e26fbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
