export const name="contextual_token_add";
export const id="dl_4b0b3ff7e23480273d93";
export const url=new URL("../icons/contextual_token_add.svg?v=7605097dae2b6efb3430c71aaeea2f65c852587834f1ec8310d2dc7e9648a320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
