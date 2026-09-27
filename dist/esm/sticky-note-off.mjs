export const name="sticky-note-off";
export const id="dl_dac9e818b1254961b7db";
export const url=new URL("../icons/sticky-note-off.svg?v=e30151e7c737c82d5747beb0c65adfbc86e75a5740669fa15b4831f8192125ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
