export const name="video-conference-light";
export const id="dl_6ef041ddb2cd02b6bd75";
export const url=new URL("../icons/video-conference-light.svg?v=993786534f6e42e2331dc0e2bd7b0c76e19f8f9c60223627f087851a7f4f4670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
