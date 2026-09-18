export const name="ev_shadow_add";
export const id="dl_c1761627a4f94713ae81";
export const url=new URL("../icons/ev_shadow_add.svg?v=3bb244bd2ef3305ae2e3507c31ba6bb31dad7a37fbfb8e61ee66246986f665c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
