export const name="hourglass-low-bold";
export const id="dl_edc8cc16705f473b8575";
export const url=new URL("../icons/hourglass-low-bold.svg?v=38df20926a95cd6bcdc59a899e1334d15a610137fb3ba5fe09b18fba4460faff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
