export const name="push-pin-simple-slash-light";
export const id="dl_abd9b31e2808422ba845";
export const url=new URL("../icons/push-pin-simple-slash-light.svg?v=d8cc4bd3abb7e11f97ab6f89cad968277391178a28a38ca6847f5878983efc60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
