export const name="lucid_1-bot-off";
export const id="dl_e5b22799c90d40dc8ffe";
export const url=new URL("../icons/lucid_1-bot-off.svg?v=de1f9c810b7fcb1f9f79d9669691e8317b13d3f563d8a1cb9b983045848c1728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
