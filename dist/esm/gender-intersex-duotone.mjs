export const name="gender-intersex-duotone";
export const id="dl_04595d7994c2406ab5f7";
export const url=new URL("../icons/gender-intersex-duotone.svg?v=aec5ddb519e08521cc8c6b8277101ad2630dcece4a0f674e82ee993b5e6091b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
