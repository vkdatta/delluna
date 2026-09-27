export const name="bolt";
export const id="dl_ebe8e6b27c85e655141c";
export const url=new URL("../icons/bolt.svg?v=9edfc2a4c48f66327c64a65c825ec3af0052ccf825de35b0900bffd82e112712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
