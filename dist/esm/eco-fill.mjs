export const name="eco-fill";
export const id="dl_8737e0a1b4894d80b101";
export const url=new URL("../icons/eco-fill.svg?v=74d0cc4464bc9ca127970479ff6d9439a5f2d2ec08628ba40c0abafd65dfc003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
