export const name="battery_error";
export const id="dl_5378a08fe92606889b19";
export const url=new URL("../icons/battery_error.svg?v=388dbc8311df2fadba15783924354fd448ab563e13d35090d00a0cc4e657d2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
