export const name="family_link-fill";
export const id="dl_fc8bb45f6b5cd6679db7";
export const url=new URL("../icons/family_link-fill.svg?v=4227750ba21150330597633571ee925184b7024b0adc92834faa541b978921d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
