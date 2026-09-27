export const name="blanket";
export const id="dl_43f6d6cb105b43e4630a";
export const url=new URL("../icons/blanket.svg?v=bbebee940e4c4fa049471fa7335afdb49c13f2ed49669588d874d89fb89861fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
