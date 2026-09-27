export const name="hand-withdraw-fill";
export const id="dl_de9b5b18a1c645498cd0";
export const url=new URL("../icons/hand-withdraw-fill.svg?v=bacdcdb996c0cde0bc5e53e59f3c79274b2fe2bd3c51784c992e79da887de02e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
