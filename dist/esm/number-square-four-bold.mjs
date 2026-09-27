export const name="number-square-four-bold";
export const id="dl_b1b591250f4044c19483";
export const url=new URL("../icons/number-square-four-bold.svg?v=26d7017ed4e036043caa4e246556d8a7589310772a155f539d044af25c2d3a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
