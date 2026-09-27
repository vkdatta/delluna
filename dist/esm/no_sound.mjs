export const name="no_sound";
export const id="dl_11c647e4025aa1f9b59a";
export const url=new URL("../icons/no_sound.svg?v=c62ea36b29a847519a4dcd534af12a54a7fdcf9ce91b9ba7c3b2f272373de632",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
