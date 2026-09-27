export const name="volleyball";
export const id="dl_03691b0b81d247fd8b83";
export const url=new URL("../icons/volleyball.svg?v=dbdf795d0f3db81b46561274845c65cd6a888bd6acab0cbed51657cc488ea3a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
