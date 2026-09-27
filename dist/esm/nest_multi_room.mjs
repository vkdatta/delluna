export const name="nest_multi_room";
export const id="dl_a6f41bdcc5479395d35b";
export const url=new URL("../icons/nest_multi_room.svg?v=8976c086072067b879c95ff06608822cbe5cc64dbda4b371cb4796c4ceb2c9d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
