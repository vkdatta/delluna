export const name="home_work-fill";
export const id="dl_f383c9c983cb4c769d5c";
export const url=new URL("../icons/home_work-fill.svg?v=18e53c333a344c2bbba653d39bb23cc23eae7acebf78c6740599385b6ab2a709",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
