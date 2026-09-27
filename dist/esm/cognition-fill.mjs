export const name="cognition-fill";
export const id="dl_72cbb7d3412893dd4abb";
export const url=new URL("../icons/cognition-fill.svg?v=771ef9ac0ae93c539c940bf9e4314e122ebbec2ae40958eb13f0d30b71da7620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
