export const name="letter-circle-v-fill";
export const id="dl_8207e13c6e194f3a8148";
export const url=new URL("../icons/letter-circle-v-fill.svg?v=31d77191dd17ccd1b1648384fa44b2bc580d393db6cc5463206ddb0617a0538a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
