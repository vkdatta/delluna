export const name="energy_savings_leaf-fill";
export const id="dl_4e21f3f5b8122ba567a5";
export const url=new URL("../icons/energy_savings_leaf-fill.svg?v=4d75f280fc7e696281dd9bae8513b7ec449f697b4ca04a94ad1f0d1c7089f42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
