export const name="cherries-thin";
export const id="dl_ffd883e886244746825f";
export const url=new URL("../icons/cherries-thin.svg?v=788eeef3e5dad672407deb5c353b38a15336adc812d6304a8399baef09a2bd98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
