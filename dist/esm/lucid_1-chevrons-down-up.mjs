export const name="lucid_1-chevrons-down-up";
export const id="dl_701eabb04e98410ca71a";
export const url=new URL("../icons/lucid_1-chevrons-down-up.svg?v=5102c7e48288fc55261965b24dfe062afd21da22b116c20b339779ec561e01b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
