export const name="sports_basketball-fill";
export const id="dl_8e1962e0d85b4f788b5b";
export const url=new URL("../icons/sports_basketball-fill.svg?v=454ab9e80bea32021e80d85771f0fe712186a37d295d28edd9d37256ab6c4b4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
