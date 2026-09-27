export const name="slack-logo-fill";
export const id="dl_0ffa4d850e4943375304";
export const url=new URL("../icons/slack-logo-fill.svg?v=c8fdb2f10a7d6ecf4c35af79ee61535b4a386edeb33f43089e589d506713bf3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
