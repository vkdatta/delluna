export const name="beer-bottle-light";
export const id="dl_8f8ca07de2ff477897cd";
export const url=new URL("../icons/beer-bottle-light.svg?v=fa36bb6105928166ba9cb99219334e1dab0bf0d5c0ca54dde3a3da5d74818745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
