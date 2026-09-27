export const name="shield_moon";
export const id="dl_22a01ffa2c4e7a99b42f";
export const url=new URL("../icons/shield_moon.svg?v=10682207fe4a957190d1cc1e2930ed14daa5fc494ef7dc5076c5bbf199f8a424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
