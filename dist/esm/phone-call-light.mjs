export const name="phone-call-light";
export const id="dl_0762401a68a9411c96f7";
export const url=new URL("../icons/phone-call-light.svg?v=c4cde11800225c10d1edee7198465cd2e5589ae0201e844bc2ac499f2a05bc1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
