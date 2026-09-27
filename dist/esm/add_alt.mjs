export const name="add_alt";
export const id="dl_c6252bfaa1f71f512288";
export const url=new URL("../icons/add_alt.svg?v=b2d21a3cd390d6ab9d2cd8697ce240de7e21674482ac026a9fccdeeb843493b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
