export const name="garage_door-fill";
export const id="dl_12e09cab1cbd62e9f1cf";
export const url=new URL("../icons/garage_door-fill.svg?v=ec12d346c7e54c91fbec19a3e2f1991f912c160fbf25eba6bbfa76fcba153621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
