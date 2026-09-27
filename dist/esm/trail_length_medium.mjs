export const name="trail_length_medium";
export const id="dl_c896afa2f19cbac3a6c0";
export const url=new URL("../icons/trail_length_medium.svg?v=35a94aee263a49b4e00a4fe498bdc36fcfba4444beba0e6e381e4db56ca34089",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
