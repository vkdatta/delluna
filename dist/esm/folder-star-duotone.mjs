export const name="folder-star-duotone";
export const id="dl_859c8fc5925f4bb997d8";
export const url=new URL("../icons/folder-star-duotone.svg?v=6a4f26371212141a09d42d7313357829251ea5d754b26118c1015f65c79e8066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
