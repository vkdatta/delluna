export const name="sync";
export const id="dl_8346934bd48b0591dc8f";
export const url=new URL("../icons/sync.svg?v=1d8883e4039c3feaf00ea5bd40820b063b25eb9386302e9e9fc1421b587a3147",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
