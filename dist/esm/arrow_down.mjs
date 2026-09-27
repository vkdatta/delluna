export const name="arrow_down";
export const id="dl_e1707a8654d8e54ad46d";
export const url=new URL("../icons/arrow_down.svg?v=8994b31edeaf20e9259522d9b8cabb200d1788cc723633d5f839d2b73d004b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
