export const name="group_add";
export const id="dl_92c721dd3b074e27a4c4";
export const url=new URL("../icons/group_add.svg?v=fa71a15e1722ffd50d599dedfcd82ee501359cb07bc8da12e8456727c227d2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
