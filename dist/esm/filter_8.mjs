export const name="filter_8";
export const id="dl_b56916d67a2d7cc11a0f";
export const url=new URL("../icons/filter_8.svg?v=32fb9c6da157de7c15a98ae0a7ed70856d4e854da9cbc6dd19a303e72cbe124e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
