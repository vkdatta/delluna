export const name="lightning-a-bold";
export const id="dl_6da23cc01dfc479da76d";
export const url=new URL("../icons/lightning-a-bold.svg?v=93c941415d2b16255f6abd799740650a064412c671fce0214e93396dcd00d360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
