export const name="text_decrease-fill";
export const id="dl_1df455b2e0cc430bbe91";
export const url=new URL("../icons/T/text_decrease-fill.svg?v=f8ef22ffdad60543e3f87d5820728e4d9613552b2ebad901406ce6d9ddb1b425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
