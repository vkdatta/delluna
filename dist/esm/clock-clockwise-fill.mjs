export const name="clock-clockwise-fill";
export const id="dl_cbb7810e43334fdcb4a2";
export const url=new URL("../icons/clock-clockwise-fill.svg?v=0e7e8e6b3836eb48085077193c57075413cc2b7f79a08b6c156bd1fd35491afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
