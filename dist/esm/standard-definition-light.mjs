export const name="standard-definition-light";
export const id="dl_9dae889415de6f9fae40";
export const url=new URL("../icons/standard-definition-light.svg?v=573e4d86c102ddd36e25448bca3aa4e84bbcb445475cbc33349535e30aa5c601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
