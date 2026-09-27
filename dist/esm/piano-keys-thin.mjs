export const name="piano-keys-thin";
export const id="dl_ad664f9669f442af9b57";
export const url=new URL("../icons/piano-keys-thin.svg?v=3c92da5e9ea6304dbc6ad006028a052c0f49e9207ee2e00bd1fa2f5c32420a0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
