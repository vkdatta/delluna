export const name="manage_accounts";
export const id="dl_bd976fcc96ca77be56de";
export const url=new URL("../icons/manage_accounts.svg?v=918ebc06ebd38879a878eb15f3946d7611b64be046c427558b2a7ee47c9ae68b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
