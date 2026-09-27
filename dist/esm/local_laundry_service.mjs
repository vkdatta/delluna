export const name="local_laundry_service";
export const id="dl_156c3931d1eaeca8a79d";
export const url=new URL("../icons/local_laundry_service.svg?v=da8fbcaf4c6355c9ff3e2eca43384e48cb8115d571ce3e2dd648ce7ef0332def",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
