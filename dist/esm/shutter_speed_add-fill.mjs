export const name="shutter_speed_add-fill";
export const id="dl_71a5fc4157316ac42572";
export const url=new URL("../icons/shutter_speed_add-fill.svg?v=e4ff820a76fccdb77564ab8969d3070f63ba9cba309b963350ddc62627870b0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
