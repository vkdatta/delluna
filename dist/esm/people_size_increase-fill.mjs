export const name="people_size_increase-fill";
export const id="dl_29dfb155b1f8fa8d6867";
export const url=new URL("../icons/people_size_increase-fill.svg?v=36f3e59d021b4c675ea133a5f10bf5cc103c050b5ae243b9333feca69a02eba6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
