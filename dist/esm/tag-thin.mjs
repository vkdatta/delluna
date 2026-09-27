export const name="tag-thin";
export const id="dl_12fed991f8ba23456883";
export const url=new URL("../icons/tag-thin.svg?v=1bce7bd4676b309d4b4d329b32a856c9cca9585b4e3e20b3ec2613ec3cf87e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
