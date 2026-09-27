export const name="repeat-light";
export const id="dl_13d4d64dac034f478a5d";
export const url=new URL("../icons/repeat-light.svg?v=7f08c01a8c9a450e617a083c85ba8273c5ef7f252d77c5e81f3f5242bf73bff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
