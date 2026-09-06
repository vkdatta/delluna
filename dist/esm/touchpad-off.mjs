export const name="touchpad-off";
export const id="dl_1601aa1441be4d8c9217";
export const url=new URL("../icons/touchpad-off.svg?v=0d9114f177084eac3569ed800816fd9044fb6fd024b2189ddb395d4ee5e22c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
