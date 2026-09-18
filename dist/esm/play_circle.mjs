export const name="play_circle";
export const id="dl_a4477f4d65cd4b64ab7b";
export const url=new URL("../icons/play_circle.svg?v=3d7c26b7b13c06351dd2cd54d39f0e87c44c4918a74879932fdf7a74c92feadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
