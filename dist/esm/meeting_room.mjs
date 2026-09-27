export const name="meeting_room";
export const id="dl_37ba199b217eba9bd956";
export const url=new URL("../icons/meeting_room.svg?v=35b628e0856e08324f20f75f4ab7bbfc81f8c7b2a015b55a04613cfc29f70e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
