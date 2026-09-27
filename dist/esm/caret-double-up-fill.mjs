export const name="caret-double-up-fill";
export const id="dl_fccf6740c86f45c29ec1";
export const url=new URL("../icons/caret-double-up-fill.svg?v=5e83ccf7aa0c0bbd59a5fe44f5c332d24c4946ffeaf55467e87d09639192f63b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
