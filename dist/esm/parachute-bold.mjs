export const name="parachute-bold";
export const id="dl_829eabb4fb0f449eb7fb";
export const url=new URL("../icons/parachute-bold.svg?v=3a352d5daf431f5eef7e500f42a9d4ac8e9891442a4424d1cfe234c9a5bec52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
