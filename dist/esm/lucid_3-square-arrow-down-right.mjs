export const name="lucid_3-square-arrow-down-right";
export const id="dl_1881bd5b3b16462795cc";
export const url=new URL("../icons/lucid_3-square-arrow-down-right.svg?v=8a48babecbeb98161ad72c35d8f486252a4bbad54321708a6191f5358c94cc37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
