export const name="garage-fill";
export const id="dl_b8c7ddad282d419f9167";
export const url=new URL("../icons/garage-fill.svg?v=0576fb199a171dd695e306bb4c87b1d2a5e1da9c5ca4b0447d0bd7470b88278d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
