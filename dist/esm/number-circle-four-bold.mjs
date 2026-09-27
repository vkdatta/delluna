export const name="number-circle-four-bold";
export const id="dl_bfef25aa97a24e7399fc";
export const url=new URL("../icons/number-circle-four-bold.svg?v=fad9cf48823866d573d8799b6f3adb38cf72367250229fb7c9e2acfa54887358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
