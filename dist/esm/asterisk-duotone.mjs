export const name="asterisk-duotone";
export const id="dl_49457882e8de4821be23";
export const url=new URL("../icons/asterisk-duotone.svg?v=d8123a0690206b29498fe275ac4261920438bac44c7a9e022b6aeaf8b6152c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
