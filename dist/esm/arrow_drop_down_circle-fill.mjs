export const name="arrow_drop_down_circle-fill";
export const id="dl_bb6049164e65064fe992";
export const url=new URL("../icons/arrow_drop_down_circle-fill.svg?v=4ccfb545871d04d4e25af5c585cf63038079214dbde30164181a7fdd55afe401",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
