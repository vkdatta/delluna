export const name="lucid_3-playing-cards-fan";
export const id="dl_c38c721dbdae487c90af";
export const url=new URL("../icons/lucid_3-playing-cards-fan.svg?v=380912aface73fa053b50c5ea09d28d09dde8859da95809e2995949ffef5e981",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
