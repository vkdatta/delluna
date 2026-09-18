export const name="credit_card_heart-fill";
export const id="dl_1ed132f00ff64fb7a797";
export const url=new URL("../icons/credit_card_heart-fill.svg?v=76a664efdb8e5d53a7aa8e90f5d0eedf0d7c0f47a244cf237203c5487106ff0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
