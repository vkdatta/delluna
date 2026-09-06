export const name="radio-button-light";
export const id="dl_60243e86d573499a9b36";
export const url=new URL("../icons/radio-button-light.svg?v=dd840e6660c0f872feb78b5179f427262a14ff6fd02e21637398129706bf003f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
