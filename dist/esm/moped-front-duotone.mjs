export const name="moped-front-duotone";
export const id="dl_3442653704b949a78627";
export const url=new URL("../icons/moped-front-duotone.svg?v=4135b8f33b8b34973bae16b3e22acbcf2727fd5772923771d0c1f48496440b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
