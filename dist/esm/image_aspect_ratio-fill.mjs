export const name="image_aspect_ratio-fill";
export const id="dl_81c5bb39f552e3bbc0e3";
export const url=new URL("../icons/image_aspect_ratio-fill.svg?v=3e791ca8fef71eb8095669a4bcccb9d39939f0791e8c5ea6508ebdb9c6b7b0a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
