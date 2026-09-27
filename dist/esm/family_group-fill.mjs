export const name="family_group-fill";
export const id="dl_5ed6ebe8680d2c215124";
export const url=new URL("../icons/family_group-fill.svg?v=b5b81eff310345fe34f3c77128c0fdef9f0adc4ed65b98426edc68c399e739d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
