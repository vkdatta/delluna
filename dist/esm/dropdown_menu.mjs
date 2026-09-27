export const name="dropdown_menu";
export const id="dl_045ae8c208ab8edf60e2";
export const url=new URL("../icons/dropdown_menu.svg?v=062d5d8c2a570b47f911da6f3f3a9cc87787e1c50cf214e327aedcff52952aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
