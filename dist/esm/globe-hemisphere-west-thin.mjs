export const name="globe-hemisphere-west-thin";
export const id="dl_73dbd7349e404967b6cc";
export const url=new URL("../icons/globe-hemisphere-west-thin.svg?v=23f39f966bcf8dc4929639a467acf0b2b7f13f62cf05fc724b74ffcef02a2eba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
