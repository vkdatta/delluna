export const name="arrow-elbow-down-left-light";
export const id="dl_1c718e6a60c64d0a97fc";
export const url=new URL("../icons/arrow-elbow-down-left-light.svg?v=11835f487f690442b27c7ded5aefb77687d143f63fb2479651dfeb8b0b3b3443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
