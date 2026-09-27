export const name="poker-chip";
export const id="dl_5e5f68b6b0ca49b68aae";
export const url=new URL("../icons/poker-chip.svg?v=a08988231bcf0ab0a03679b8d7a9409ca419c1ab4f8f686d0cfe160a1c157e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
