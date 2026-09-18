export const name="sd_card_alert-fill";
export const id="dl_a1804104f2fd4d9aa053";
export const url=new URL("../icons/S/sd_card_alert-fill.svg?v=bb1d50ae22a171e7afe81332d3e47ce75ba73e5daf883999773d184a38b9dee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
