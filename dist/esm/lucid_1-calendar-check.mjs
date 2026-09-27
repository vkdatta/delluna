export const name="lucid_1-calendar-check";
export const id="dl_fdf3cddc1782485f8ec3";
export const url=new URL("../icons/lucid_1-calendar-check.svg?v=8ebebe352d7353441ff4e9542dfb05bbf627a6320976a647c693f92d7257ab73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
