export const name="square-half-light";
export const id="dl_29983d5a0a9d4b9dbf12";
export const url=new URL("../icons/S/square-half-light.svg?v=783acbf0bc879bcaf8814da211351434fa5bc9d420942cd531910f56734fbca4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
