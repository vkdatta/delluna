export const name="triangle_circle-fill";
export const id="dl_b91dff2d1ac4183e2bb9";
export const url=new URL("../icons/triangle_circle-fill.svg?v=f2bd60c05499b4b673f4075c7782888ea741472315edf638c6f50e3f6537fd07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
