export const name="bezier-curve-thin";
export const id="dl_27d61ebe39944f86a7b8";
export const url=new URL("../icons/bezier-curve-thin.svg?v=c263a0c1d67357173d921a7419adfc9f3b5eaae70b0792e5370303979570a880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
