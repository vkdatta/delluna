export const name="four-k-thin";
export const id="dl_271619119f8f436f996d";
export const url=new URL("../icons/four-k-thin.svg?v=1e256f037dd18ee45e5d08be801837ad5da884e62d1ea17e6b7ea741d7f77f8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
