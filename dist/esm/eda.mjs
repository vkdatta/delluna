export const name="eda";
export const id="dl_892ad7118efd48b1b394";
export const url=new URL("../icons/eda.svg?v=a13e84ed66618d20b3ddc3b6265d9f52ce5228cd0dc369195235355713b5d107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
