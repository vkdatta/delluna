export const name="sd_card_alert";
export const id="dl_f5741ac05d7049c1a979";
export const url=new URL("../icons/sd_card_alert.svg?v=0b3f8cc0e04d33fd583c07d7935f058bd06a17938efa4fb35865170c831b06b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
