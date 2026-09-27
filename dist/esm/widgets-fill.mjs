export const name="widgets-fill";
export const id="dl_9d2f1eac4489070499d1";
export const url=new URL("../icons/widgets-fill.svg?v=68a928dd58311f24a109b6c6ef80915f097eb5d03c60679e8afa4207627a3f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
