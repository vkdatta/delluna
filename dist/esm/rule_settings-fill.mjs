export const name="rule_settings-fill";
export const id="dl_e80e4826f1a451570d0a";
export const url=new URL("../icons/rule_settings-fill.svg?v=d0fe929ed810382006afe10ebbed474e2afbef152f76740d0d3313ac516dbbe2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
