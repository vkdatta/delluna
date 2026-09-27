export const name="brightness_empty";
export const id="dl_b61f52716c28443d6ffa";
export const url=new URL("../icons/brightness_empty.svg?v=c537f06180ab1727ee28450b32252b86188519a741d1b98c2994fb02712e8d75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
