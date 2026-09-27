export const name="radio_button_unchecked-fill";
export const id="dl_1b64987acfe586cfcede";
export const url=new URL("../icons/radio_button_unchecked-fill.svg?v=89b06307f83d81c73b83044d7c085b2856b1f332ce432b42ee5b69510206ee54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
