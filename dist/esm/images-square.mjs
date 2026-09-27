export const name="images-square";
export const id="dl_13d08508bbd346eaa6e4";
export const url=new URL("../icons/images-square.svg?v=83b98dd57bf89c6ece63f77509e5bed4882acb279d98ba5065a2bdcc2d1e04e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
