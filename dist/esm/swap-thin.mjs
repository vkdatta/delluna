export const name="swap-thin";
export const id="dl_adb424953362b8794ee5";
export const url=new URL("../icons/swap-thin.svg?v=9f295ff8eee024e9180058f3ab2dcfee75f6b8954ee1134d9b0699cae9acd35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
