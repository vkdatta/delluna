export const name="credit_card_heart";
export const id="dl_e3e52e82272bce12549d";
export const url=new URL("../icons/credit_card_heart.svg?v=682248704106802b3eb02b36b3f1141e1f3b2d4765288e861ddb86ede2ac6a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
