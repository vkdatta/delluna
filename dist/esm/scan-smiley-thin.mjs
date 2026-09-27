export const name="scan-smiley-thin";
export const id="dl_80920a5638068907ee51";
export const url=new URL("../icons/scan-smiley-thin.svg?v=28d02a9a0bc27f707169f902b8382b01ceee0a8f2386efde3aefd9290ac78bcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
