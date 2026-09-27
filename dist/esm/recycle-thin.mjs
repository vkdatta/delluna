export const name="recycle-thin";
export const id="dl_12ad1bcf0cfe475bade2";
export const url=new URL("../icons/recycle-thin.svg?v=a6a3db21782bee5453ff90e677e78b6608fbb7df164bdfafbe992b465f04b7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
