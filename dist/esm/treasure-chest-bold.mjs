export const name="treasure-chest-bold";
export const id="dl_7b5a76303e3336dc29b6";
export const url=new URL("../icons/treasure-chest-bold.svg?v=b30971d4f586cec4d19ead31d4248838b6030ceac640d0603ab4bc1d176682df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
