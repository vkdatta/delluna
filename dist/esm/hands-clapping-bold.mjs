export const name="hands-clapping-bold";
export const id="dl_469d4411390441bb9152";
export const url=new URL("../icons/hands-clapping-bold.svg?v=8c08d3d2560e5764d426a4f792f3ce1c9cebfbeda927d7498d6a18c7eb6a6c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
