export const name="user-list-fill";
export const id="dl_7cd959e0e16e22482c13";
export const url=new URL("../icons/user-list-fill.svg?v=b147713cff6683238cd1ada7c1707861cc25d4a9ad7ad7e9cccf279c37ed4474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
