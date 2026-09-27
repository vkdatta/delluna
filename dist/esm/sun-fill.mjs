export const name="sun-fill";
export const id="dl_d9bfebf758b0f2b6eed0";
export const url=new URL("../icons/sun-fill.svg?v=03253771a40381b8ca9ffe7aaa5db1ab0c40679b7a248aa7612222620361b9cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
