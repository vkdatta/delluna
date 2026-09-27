export const name="window_closed-fill";
export const id="dl_08b57835d15de2a42ee3";
export const url=new URL("../icons/window_closed-fill.svg?v=72d5ee9a6d94af8767d9be37fdf0bc76492cbab6e7f1d66392508cb783094c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
