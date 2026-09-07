export const name="arrow-down-left-thin";
export const id="dl_f483f67a7c814875857d";
export const url=new URL("../icons/arrow-down-left-thin.svg?v=5a80ab28419eebdd9758d72aadd8bba1bb4f965be6d1f7e4c86c3bfada931278",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
