export const name="light_mode";
export const id="dl_7419675fce1b4c5f9427";
export const url=new URL("../icons/light_mode.svg?v=ff2c6937a465b25d487894c0d4cfe45081bbbf9725c6780bcb8169026ca1d448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
