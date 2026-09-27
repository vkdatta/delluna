export const name="power_input";
export const id="dl_684c8f67486f656f5d19";
export const url=new URL("../icons/power_input.svg?v=7943b8952157f49ec9032422538b310d9c0c8abaf743175c3be2fc008a71c182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
