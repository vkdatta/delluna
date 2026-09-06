export const name="lucid_2-dessert";
export const id="dl_f2115d50813b4b9fbdaa";
export const url=new URL("../icons/lucid_2-dessert.svg?v=d518c4dc07eb18ee4d6c8f75a83bc460ab8816ddb69768abe3a069c0f8bb86da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
