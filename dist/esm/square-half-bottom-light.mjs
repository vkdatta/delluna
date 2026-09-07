export const name="square-half-bottom-light";
export const id="dl_71d4f1d9d07d4179898b";
export const url=new URL("../icons/S/square-half-bottom-light.svg?v=cf982ece7370ef38494244269b4eb96d86f1726b155024adf39e7bb833aeb379",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
