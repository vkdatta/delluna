export const name="swipe_right_alt";
export const id="dl_45632a27cdf32a1139d5";
export const url=new URL("../icons/swipe_right_alt.svg?v=7607663ab8d6fc372cf247c629773e3c639800848f0c2785a8101dba3601ad34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
