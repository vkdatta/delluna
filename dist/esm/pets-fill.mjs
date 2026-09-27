export const name="pets-fill";
export const id="dl_23d4047e3cfb469fb214";
export const url=new URL("../icons/pets-fill.svg?v=f98aa554f6fc99e8d6e6b88c6367183206530d119bd173c62e78f670c2293699",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
