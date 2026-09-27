export const name="hamburger-light";
export const id="dl_78b8513550574fa69765";
export const url=new URL("../icons/hamburger-light.svg?v=8045eefce4f6f1869cf648d33b0a1be09447481202bc15b43c259533700d79d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
