export const name="google-podcasts-logo-bold";
export const id="dl_f5922202b6fa45d0b640";
export const url=new URL("../icons/google-podcasts-logo-bold.svg?v=ab1c88b1a4b01ac3d3da47060cf6dae1c64597bcd3a3d5d816d6b2abc4212b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
