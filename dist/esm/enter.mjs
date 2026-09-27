export const name="enter";
export const id="dl_3105691065ff9395cab3";
export const url=new URL("../icons/enter.svg?v=ca4d44078e81c7297317f19e80a9cb8ca5053a0634de16350bdd4cfba3764288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
