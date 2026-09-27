export const name="four-k-thin";
export const id="dl_271619119f8f436f996d";
export const url=new URL("../icons/four-k-thin.svg?v=d6c7f18a7a0f61e8e2e879635ac7cae5cd643071dc7147b7b16129179c8565d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
