export const name="thumbs_up_double-fill";
export const id="dl_d2f9fc56da71a1ca62cf";
export const url=new URL("../icons/thumbs_up_double-fill.svg?v=93e5f70c56e24a0288bab0f7019f0a76b2e8f7993252b8fdf1c15091d0ac2f70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
