export const name="swap_driving_apps-fill";
export const id="dl_040fec836a05ec5eb3ab";
export const url=new URL("../icons/swap_driving_apps-fill.svg?v=02069223b85d6dd341f52706275aea17d429450893b0b2d48cebd676d3c39334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
