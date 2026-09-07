export const name="bluetooth-thin";
export const id="dl_4f78819d8cdd4458a429";
export const url=new URL("../icons/bluetooth-thin.svg?v=cb93b6eedb46989619e633c4c3436a4051dff047db4f346263fc7573ab003870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
