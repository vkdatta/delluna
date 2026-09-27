export const name="bookmark_manager";
export const id="dl_ca98ee97b479655e8d60";
export const url=new URL("../icons/bookmark_manager.svg?v=f3346b7c81d1b4e3dd56b47e33d0420e61e8ad6858f2f22bedb78bc0af3c05c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
