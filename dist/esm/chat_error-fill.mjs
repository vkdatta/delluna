export const name="chat_error-fill";
export const id="dl_41185ed124f64c809df9";
export const url=new URL("../icons/C/chat_error-fill.svg?v=37b84e09bf0e5d5e66a3cd120b6f092af4d960da9fb689506a134c2b0e643914",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
