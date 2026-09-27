export const name="keyboard_alt";
export const id="dl_f19ee567589c971854d8";
export const url=new URL("../icons/keyboard_alt.svg?v=9390ba92e7c2766a05f2df02489eba52b9dfdd242144deaeed16a03b169dc09b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
