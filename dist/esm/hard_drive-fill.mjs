export const name="hard_drive-fill";
export const id="dl_74ed065fcae53d865e8f";
export const url=new URL("../icons/hard_drive-fill.svg?v=f38a959edc0e5be493cdc58e00c30b9e384b32e9148e59096bc0bb97a3e19922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
