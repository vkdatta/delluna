export const name="rounded_corner-fill";
export const id="dl_73365d37db6f0481abef";
export const url=new URL("../icons/rounded_corner-fill.svg?v=77f1ec6515fac5fdcc47cb8759f10753bb8edd02566463f8f107b1c23d4d896b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
