export const name="nest_clock_farsight_analog";
export const id="dl_2448a7b449784a0eafb0";
export const url=new URL("../icons/nest_clock_farsight_analog.svg?v=352a3461e3778377ddc059955b96ffa2a38fc11fb8b5b1e7026c40d1f31ceafe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
