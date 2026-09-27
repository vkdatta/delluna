export const name="guitar";
export const id="dl_de2ad63c1bfc4303849c";
export const url=new URL("../icons/guitar.svg?v=c3fc492eed74c54222f9f5d564e016fa34ef4feac6b7b7edc14689ec53ef6157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
