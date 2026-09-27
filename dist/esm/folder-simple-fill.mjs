export const name="folder-simple-fill";
export const id="dl_8b6ce2fa91a146a08d85";
export const url=new URL("../icons/folder-simple-fill.svg?v=a66b2c6c687796cc1334e32c11e30b0961513aa36022f3380ebf0928c19a86ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
