export const name="floppy-disk-thin";
export const id="dl_b5ab5936bafe4d768133";
export const url=new URL("../icons/floppy-disk-thin.svg?v=0fbeccfd3dc5c84794c3f93cabf21f33b9e5cb5092c6b14b054ae0d7b729a5a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
