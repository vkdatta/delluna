export const name="arrow-bend-left-down-thin";
export const id="dl_b84d0f9dc5ed4413b805";
export const url=new URL("../icons/arrow-bend-left-down-thin.svg?v=2984590177f4c414ea2cd92219ebe3e06efee0f17d2d10b5c0362048be76b5b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
