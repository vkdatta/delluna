export const name="suitcase-rolling-thin";
export const id="dl_56c117b264083a642afd";
export const url=new URL("../icons/suitcase-rolling-thin.svg?v=7b51f7d016f7e6c333b9cc9cf5eae43be0ddd4a7ab43c30c118d48c7b96cbd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
