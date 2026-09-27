export const name="lucid_2-gallery-vertical";
export const id="dl_43d93edccbd44bbe9915";
export const url=new URL("../icons/lucid_2-gallery-vertical.svg?v=d8ad0afd59b57b37a30983dd054cdc21eb7b089ac86d4060dfdd86d91b95b1d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
