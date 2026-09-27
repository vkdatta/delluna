export const name="hash-thin";
export const id="dl_32030ee6f8fa45a99c0a";
export const url=new URL("../icons/hash-thin.svg?v=1b1cf5a9f401e906416813ad29032a0cebb420c3ec15637e1582b59c48353085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
