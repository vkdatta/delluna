export const name="server_person-fill";
export const id="dl_55683c12bcf88e07b59b";
export const url=new URL("../icons/server_person-fill.svg?v=8cce38d987c64449cce8dfadc83698b34a5cfbd14939adf043734f30d8116e9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
