export const name="cherries-thin";
export const id="dl_ffd883e886244746825f";
export const url=new URL("../icons/cherries-thin.svg?v=fb3e340fd487e5272ab1b496868980a1d92355f2c5f041343543b23868f4c250",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
