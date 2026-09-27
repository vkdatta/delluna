export const name="ear-slash-duotone";
export const id="dl_a90a1b2523b04446a146";
export const url=new URL("../icons/ear-slash-duotone.svg?v=cdd5d4cf11b901dacd492f842fd192baf6cc3f7bcab9d310b16b9ea1482cda30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
