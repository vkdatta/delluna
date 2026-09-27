export const name="person_add_disabled";
export const id="dl_570d55b2a601dbc2c5b9";
export const url=new URL("../icons/person_add_disabled.svg?v=ab3c638ffc72bf4a91f48b6d4b15149ea15f9e8ce0b4939c50b770f9471c20d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
