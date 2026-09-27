export const name="note-pencil-thin";
export const id="dl_84a4c8ef2c7f45d3bbfd";
export const url=new URL("../icons/note-pencil-thin.svg?v=8ba64f2f78f6ba93bacd9fbcd44914925ecb5d3d015c9f115ddcf3bc6e3bfdab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
