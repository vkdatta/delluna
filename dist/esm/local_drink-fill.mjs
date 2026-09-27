export const name="local_drink-fill";
export const id="dl_8083b33862ba78f9b104";
export const url=new URL("../icons/local_drink-fill.svg?v=032c75283dfe5333416d40d7b0a8379b2443bffc8d472b6d340d8cf91bc9df38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
