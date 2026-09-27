export const name="arrow-bend-left-up-bold";
export const id="dl_d20f53e8f1944035be45";
export const url=new URL("../icons/arrow-bend-left-up-bold.svg?v=379d87157de16381e114963fb5c545e993fc10a55bb82425bff967bf24f5523f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
