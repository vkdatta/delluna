export const name="takeout_dining_2";
export const id="dl_98753a41cd82ad840e42";
export const url=new URL("../icons/takeout_dining_2.svg?v=6aab186e81c88d6787517b290e34f8de58782c1d2f54f0e3149bb1a829e6fd75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
