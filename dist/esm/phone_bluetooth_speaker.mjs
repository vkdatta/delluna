export const name="phone_bluetooth_speaker";
export const id="dl_ff2b4ed25f6ba565a8ed";
export const url=new URL("../icons/phone_bluetooth_speaker.svg?v=b34aaaa3170b1955afd17be5f0b3bab87adfb270a3107b5158520787bceec260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
