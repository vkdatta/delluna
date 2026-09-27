export const name="pause-thin";
export const id="dl_19a7b81c26ff4c669a5d";
export const url=new URL("../icons/pause-thin.svg?v=f8c54420d0a0c4ee5f040dff4bc8c9aa227a2be64e6f646a18f61327003d8ace",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
