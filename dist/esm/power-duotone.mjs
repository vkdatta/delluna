export const name="power-duotone";
export const id="dl_5b5721daf5c648078658";
export const url=new URL("../icons/power-duotone.svg?v=663fcfcebf142cc92bf7e0d89bbb877349431dfa8761cbadbe12708d7d0c5406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
