export const name="shield-check-thin";
export const id="dl_a59aea37fd573ad207bc";
export const url=new URL("../icons/shield-check-thin.svg?v=1d5b7cf409254f5684d943014fc4d7090cbc6df71bc36a501921434d42d28ed1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
