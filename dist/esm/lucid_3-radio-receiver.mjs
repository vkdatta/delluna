export const name="lucid_3-radio-receiver";
export const id="dl_0575924a600f4799ad1d";
export const url=new URL("../icons/lucid_3-radio-receiver.svg?v=959b2f97bb97be0c6a1c8d0017f7edea183e95dc683b0534b3c4c1fd150691ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
