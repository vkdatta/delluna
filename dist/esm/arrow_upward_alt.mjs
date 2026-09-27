export const name="arrow_upward_alt";
export const id="dl_00d1b595f9b82790b03c";
export const url=new URL("../icons/arrow_upward_alt.svg?v=48470d245af96693a80fd4dafc92cbfe238228a9dd368abf2c152a17b853cd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
