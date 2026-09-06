export const name="arrow-elbow-right-bold";
export const id="dl_7c718c0cfd6546c38fa7";
export const url=new URL("../icons/arrow-elbow-right-bold.svg?v=096ae3311c59704214d99e266f24dc47d2fa9dbae9dbabfe0a7f17457bd461b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
