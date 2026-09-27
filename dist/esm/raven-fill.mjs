export const name="raven-fill";
export const id="dl_c624b20d94dea7085fe5";
export const url=new URL("../icons/raven-fill.svg?v=4ecb6a034ad74f873a1b7b115250767a1db4a23d2db7d1a3a2bdfd4806795516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
