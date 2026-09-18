export const name="my_location";
export const id="dl_cd28a4d895b64d31ab1b";
export const url=new URL("../icons/M/my_location.svg?v=1ee3cf3c8da389558a9ff2a4f663d93466bd6071a534d37297c5fbfad640ed1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
