export const name="square-parking-off";
export const id="dl_283f7da5408a4df0a763";
export const url=new URL("../icons/square-parking-off.svg?v=1c2b5784baf7e7bf8cdb04e861638786d6238c49e5a9e6b0f2c18928fcafa116",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
