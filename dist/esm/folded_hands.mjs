export const name="folded_hands";
export const id="dl_05102a0ceaf9b7da887d";
export const url=new URL("../icons/folded_hands.svg?v=cb81418bb71d9b41c6093808f660ae6b165484279ffebfc845b929abce3cf802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
