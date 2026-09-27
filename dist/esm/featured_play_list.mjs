export const name="featured_play_list";
export const id="dl_f444ee1859b893460d2c";
export const url=new URL("../icons/featured_play_list.svg?v=e521a3e252236982941e2792d855d3e982fdbf8f27949058ded6436716c95992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
