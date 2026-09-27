export const name="timer_10_alt_1-fill";
export const id="dl_65b7895952395e3f9951";
export const url=new URL("../icons/timer_10_alt_1-fill.svg?v=25c36b7baa1b4772ad485d0172c83b71e7bc4766cccc38df1dcdafec29858fb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
