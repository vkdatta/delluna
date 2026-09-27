export const name="1k_plus-fill";
export const id="dl_e474691e5719ca69bf5b";
export const url=new URL("../icons/1k_plus-fill.svg?v=3ba2d9b53de1142f3e47ecfb0bbb241658f00a656bbfc21fc57d9376835a5df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
