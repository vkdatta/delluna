export const name="globe-simple";
export const id="dl_28f733bbcbcd473abbe4";
export const url=new URL("../icons/globe-simple.svg?v=ef674261414661350af7d83642fd842650988a5b2e6df6c7a3b5871f147435b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
