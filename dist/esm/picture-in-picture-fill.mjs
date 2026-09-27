export const name="picture-in-picture-fill";
export const id="dl_81b893ab0ba84febb5b4";
export const url=new URL("../icons/picture-in-picture-fill.svg?v=a7027a59a154ccdd28d19e649cff7f73711015f4f4613e1c90810262873df00b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
