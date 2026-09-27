export const name="puzzle-piece-thin";
export const id="dl_6217985940b14db4ae0b";
export const url=new URL("../icons/puzzle-piece-thin.svg?v=1a87d773b7fc1c84ff163aa4a9ba8dc2127a6fda8b67275fcbcd37b680a9ab27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
