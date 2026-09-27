export const name="flashlight_on";
export const id="dl_2d80d6229a76a59ade72";
export const url=new URL("../icons/flashlight_on.svg?v=caaed5babc59174333ca773781ff694ef2f259c6c3d322e0ccd6ee4eb2fc150d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
