export const name="lucid_1-broom";
export const id="dl_58f7625204fb40659eee";
export const url=new URL("../icons/lucid_1-broom.svg?v=f3dad424589f52b46a96b99b7678d575f56bfacad5fb14555687d7d9a164479d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
