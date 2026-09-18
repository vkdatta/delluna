export const name="no_meeting_room";
export const id="dl_2e1707764c49414389e2";
export const url=new URL("../icons/N/no_meeting_room.svg?v=2b678246a3b7c6d6d176b0e999d9de8237ab73e0c58038f9aa8eb934c6e1fee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
