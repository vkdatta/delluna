export const name="lucid_2-dice-4";
export const id="dl_d6035fa417e343489677";
export const url=new URL("../icons/lucid_2-dice-4.svg?v=554bc9bd208033b335e284ac09d6819e9e412008eb650c8f86ff9a963cf31b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
