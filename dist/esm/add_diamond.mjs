export const name="add_diamond";
export const id="dl_312a87e785dd0b4b2aac";
export const url=new URL("../icons/add_diamond.svg?v=02506252e5de2231e8a9119da4f0631d27e4d78d81127395b3ade70b9ef6d17d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
