export const name="nut-duotone";
export const id="dl_dece4a949d994a189694";
export const url=new URL("../icons/nut-duotone.svg?v=7be2130076d02c49c6ade49403480e862ac7a876b0bd98bfa750be045613c42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
