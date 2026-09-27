export const name="wifi-low-thin";
export const id="dl_666428e73b786566839a";
export const url=new URL("../icons/wifi-low-thin.svg?v=4bd4f364b50958ebc59040ba1e7351e799e616de03034929b6a41f132d70e688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
