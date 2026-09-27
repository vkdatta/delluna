export const name="scribble-thin";
export const id="dl_803c67edeec57db687fd";
export const url=new URL("../icons/scribble-thin.svg?v=2ba9abb61bbd3e160311779fab4dc2f9cfd62cc8306bef821b81c3d01a02303b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
