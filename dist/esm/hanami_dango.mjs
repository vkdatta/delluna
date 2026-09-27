export const name="hanami_dango";
export const id="dl_891a59fabe97d598bad8";
export const url=new URL("../icons/hanami_dango.svg?v=37ebc0d06ab30b7a393b8b871b5a6873e7a1df7d406785e1207a691dc6253648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
