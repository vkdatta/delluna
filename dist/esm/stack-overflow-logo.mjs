export const name="stack-overflow-logo";
export const id="dl_ee856e9fdcffd6984ba4";
export const url=new URL("../icons/stack-overflow-logo.svg?v=8b807e3615c16067706e89dbbbac03eaecc677870242bdf57e3c3074cd61dae4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
