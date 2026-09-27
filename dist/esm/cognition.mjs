export const name="cognition";
export const id="dl_db620fc86c0cb674a3db";
export const url=new URL("../icons/cognition.svg?v=690d0013edfca9ad83f270d529013d47d32464b38462d99f2ef9e10da657b3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
