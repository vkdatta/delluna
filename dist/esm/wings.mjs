export const name="wings";
export const id="dl_23bec35753454e26960d";
export const url=new URL("../icons/wings.svg?v=1d7734b0f578102ca9a101a98d155077e0b036fc11473b5d5caacc9edd99b418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
