export const name="arrow-square-down-left-thin";
export const id="dl_088675a7acd64dd984a7";
export const url=new URL("../icons/arrow-square-down-left-thin.svg?v=1df81a4c8704471477e67e2629a60ceae064205eb0ef02b292f89b1feda28ec7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
