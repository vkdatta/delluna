export const name="arrows-out-simple-fill";
export const id="dl_80809fe463df45c0806d";
export const url=new URL("../icons/arrows-out-simple-fill.svg?v=70fd5a17029e40ee375c41be9f7953db132ec50c5f2c7a758893c9edd5115f7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
