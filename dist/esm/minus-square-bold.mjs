export const name="minus-square-bold";
export const id="dl_1f4f7984393346569975";
export const url=new URL("../icons/minus-square-bold.svg?v=17e81ae211fa50d877ea6b0aad947ba530b00ee5854cbcc9664ae6d2f407b676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
