export const name="lucid_1-audio-lines-x";
export const id="dl_ec9119c9bc7945cea63c";
export const url=new URL("../icons/lucid_1-audio-lines-x.svg?v=702700b695df2ed8deb2958752ab545b0787bbebf0fc4736369adb108b84601a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
