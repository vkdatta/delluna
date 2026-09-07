export const name="moped-front-duotone";
export const id="dl_3442653704b949a78627";
export const url=new URL("../icons/moped-front-duotone.svg?v=d9f92de0c9dc943a943a1fb15b639f9265d365c2f22c541cbc44c9b3b0ea0103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
