export const name="phone-plus-bold";
export const id="dl_61831c0e48ac4db5ac56";
export const url=new URL("../icons/phone-plus-bold.svg?v=dca3eacc30766601ffc513a60bdaaced21b8cdfec0c96430484bc18024b3c39f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
