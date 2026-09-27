export const name="contrast";
export const id="dl_fe2bd424935d50cda445";
export const url=new URL("../icons/contrast.svg?v=d89876085e0327e8b079e775a71fd7725bc34c8b76b3c8a37dbbb6a9ba7c4312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
