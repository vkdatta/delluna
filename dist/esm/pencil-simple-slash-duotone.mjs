export const name="pencil-simple-slash-duotone";
export const id="dl_a814a85c4ef84e8cb33a";
export const url=new URL("../icons/pencil-simple-slash-duotone.svg?v=3336ae60c9e958dd176ff51b5829292c8891751987cdc5d56e3db70675521931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
