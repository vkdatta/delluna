export const name="dine_heart-fill";
export const id="dl_a05dee0368e991164b24";
export const url=new URL("../icons/dine_heart-fill.svg?v=5199619ab29c1edd9e120a155f518b1bd7a72b6ec961814b7aa6e70438bd85fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
