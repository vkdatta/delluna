export const name="building-office-duotone";
export const id="dl_6cd24ae5fe2a4eb6827a";
export const url=new URL("../icons/building-office-duotone.svg?v=01cf858ee0169d29810fb87fc5b8b5fd98279f6d56f6ffdb27ef5697f8c6afa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
