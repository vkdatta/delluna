export const name="selection-foreground-fill";
export const id="dl_8c3259688cfc6316ce1b";
export const url=new URL("../icons/selection-foreground-fill.svg?v=9de6adc13f5c1510c72319e4d52068dab4ea4d30a0a73d82298713934399cb70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
