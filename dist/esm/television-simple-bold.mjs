export const name="television-simple-bold";
export const id="dl_68982eb09347482c896c";
export const url=new URL("../icons/T/television-simple-bold.svg?v=103944a993dc02a03fe85e83c4886fe9f7f4b6dcc1708cea411008360e7b0319",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
