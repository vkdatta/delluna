export const name="building-office-fill";
export const id="dl_6b24f163f42343008cca";
export const url=new URL("../icons/building-office-fill.svg?v=6d0062ec7c826190b0258fc19fa59f91de1dee974eae9f462b6153d2f777c4b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
