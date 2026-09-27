export const name="lucid_1-cooking-pot";
export const id="dl_61aeb7651d2345b795c7";
export const url=new URL("../icons/lucid_1-cooking-pot.svg?v=0d5ac059c8488072961137c478bffe895d6a6bae083f68f3b5512c7b932b54b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
