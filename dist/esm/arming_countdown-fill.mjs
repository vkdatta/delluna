export const name="arming_countdown-fill";
export const id="dl_b8a3193fd493fe06337b";
export const url=new URL("../icons/arming_countdown-fill.svg?v=cc2d2af17a1d59ecc535e62c9b0184ef071e8d6828f79f51b583797d9d487718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
