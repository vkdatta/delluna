export const name="lucid_1-circle-user";
export const id="dl_10201d386cbf4cce9a4b";
export const url=new URL("../icons/lucid_1-circle-user.svg?v=ab03fe27edb7772295fba5f154634a90935a3c1de5a1097616da9612bdf52b8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
