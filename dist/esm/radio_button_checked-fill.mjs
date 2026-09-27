export const name="radio_button_checked-fill";
export const id="dl_1ed173d0df18824db531";
export const url=new URL("../icons/radio_button_checked-fill.svg?v=f9706fade951d87b61bfcd80bbc1b91c18ab7a95f121763fd952b120d48eb60e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
