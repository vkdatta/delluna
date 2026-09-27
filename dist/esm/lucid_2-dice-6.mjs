export const name="lucid_2-dice-6";
export const id="dl_4b030d550ddc4536901c";
export const url=new URL("../icons/lucid_2-dice-6.svg?v=afbf29b9640c836b76312972b449ad420bf99484e0a2ae58b138f142a8575d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
