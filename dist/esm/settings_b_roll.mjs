export const name="settings_b_roll";
export const id="dl_a8b77e8e8e912d88f1fd";
export const url=new URL("../icons/settings_b_roll.svg?v=956ff247b645b3c8d7dce8e65a54df5530244102c056ba72bff34be850f26874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
