export const name="path-duotone";
export const id="dl_f6cdc451fe9148c79066";
export const url=new URL("../icons/path-duotone.svg?v=952cfbdd474d286543573bdd952007221720c50125ff652e55fa876354c1c095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
