export const name="hub";
export const id="dl_c9e361cd2ecef764682a";
export const url=new URL("../icons/hub.svg?v=a6c6be3a76830001e33ba962d9de9fecac45247f1969663811ba0a0905f4705e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
