export const name="videogame_asset_off";
export const id="dl_75ab4847571bec7565b4";
export const url=new URL("../icons/videogame_asset_off.svg?v=bcd86d6eb3c139dde2eefbc46debc21d8366b9adcde4e7b431383dad8eaabccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
