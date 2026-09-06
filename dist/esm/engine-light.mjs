export const name="engine-light";
export const id="dl_bf235ca793bc46f2ad38";
export const url=new URL("../icons/engine-light.svg?v=ed15956772ce06c4e6b8674d2d8ba35d275afedcaeca46d83963b76d088ee251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
