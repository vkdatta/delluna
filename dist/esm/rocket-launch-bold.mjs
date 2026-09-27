export const name="rocket-launch-bold";
export const id="dl_7807aaa9ad1c46fdb082";
export const url=new URL("../icons/rocket-launch-bold.svg?v=8defebc3bd83b1bd3334e8a8448c297d97d924fc57bfb58f8134e4242bebc2ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
