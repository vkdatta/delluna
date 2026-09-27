export const name="plant-thin";
export const id="dl_a665cc333ccc4b27b148";
export const url=new URL("../icons/plant-thin.svg?v=dc6dd99cf2b045cc50b90bff9ffc79e39475376221c9b1cfb5b3e2e12c17da3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
