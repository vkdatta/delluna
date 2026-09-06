export const name="cell-signal-x";
export const id="dl_ec86504ea4a046e7941d";
export const url=new URL("../icons/cell-signal-x.svg?v=90951bfcc93f3fb3baf868b29d12b9bd12f068679a4b16ce73c6a14d99f1bc10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
