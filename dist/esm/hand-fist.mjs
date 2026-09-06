export const name="hand-fist";
export const id="dl_134de256562945c0a8d9";
export const url=new URL("../icons/hand-fist.svg?v=0253c4faedbd4dc2a5d6c87a23f084dbc996bab1c4148cdc957e75231b161944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
