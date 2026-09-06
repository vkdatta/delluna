export const name="picture-in-picture-fill";
export const id="dl_81b893ab0ba84febb5b4";
export const url=new URL("../icons/picture-in-picture-fill.svg?v=f639899c2bac0758e08f82b99791da6bebc5fdd78c0431667e86a82bf5b762b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
