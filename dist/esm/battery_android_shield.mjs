export const name="battery_android_shield";
export const id="dl_673c3e3295cdb032b90d";
export const url=new URL("../icons/battery_android_shield.svg?v=44316b96bc4bc5266d999fef1f832420fd2b52459584fea619612085f977c634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
