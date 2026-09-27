export const name="scanner";
export const id="dl_78bc898f25e3db15bbe8";
export const url=new URL("../icons/scanner.svg?v=5b3603bea1c9f3c9dbc8f376b771d05efae33132ed47ca5f1bc4626c7c2e319b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
