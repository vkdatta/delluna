export const name="moped-front-duotone";
export const id="dl_3442653704b949a78627";
export const url=new URL("../icons/moped-front-duotone.svg?v=91328d652b5b67cf18207c002c3b98d8a22d7fa2e110d87a5ff1adf7b3dd1a95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
