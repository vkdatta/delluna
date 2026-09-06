export const name="view";
export const id="dl_ce8c287c03854bcd8c82";
export const url=new URL("../icons/view.svg?v=0dbd65e80b9cb79933bdb82e2ac61efaae9b18668c3c23277777a67f488da235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
