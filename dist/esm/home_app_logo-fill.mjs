export const name="home_app_logo-fill";
export const id="dl_da921c7136bd2dc1c11c";
export const url=new URL("../icons/home_app_logo-fill.svg?v=3ab1cd512578f3e82ac8e1cdbbff0a1e7dd660bb39c71adcf703ac28f4407b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
