export const name="bird-fill";
export const id="dl_6db9b166e3d7407bad19";
export const url=new URL("../icons/bird-fill.svg?v=508c72e85e62c5fe25a12488250b3adcc093d555abc89f5fcc52fb4037c12e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
