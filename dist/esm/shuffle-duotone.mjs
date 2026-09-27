export const name="shuffle-duotone";
export const id="dl_7587a21bc35b7c738d8c";
export const url=new URL("../icons/shuffle-duotone.svg?v=02f44645fe7a27b59b72a3272374ad671a760d5c1aa7e9b1157f05697e1d1366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
