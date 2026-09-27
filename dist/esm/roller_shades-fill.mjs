export const name="roller_shades-fill";
export const id="dl_478f834edf7b99d21c52";
export const url=new URL("../icons/roller_shades-fill.svg?v=7e60ae4b76ad6c135f51fd5818a76672875fd9323170552b1bd8fdc06e03044a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
