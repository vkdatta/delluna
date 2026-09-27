export const name="language_french-fill";
export const id="dl_a7e0c92e4414cd7f1d6a";
export const url=new URL("../icons/language_french-fill.svg?v=55139ca4f513006dd9f7df506ac3b7576a3df38ef1789dcb1da3035dbe77da99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
