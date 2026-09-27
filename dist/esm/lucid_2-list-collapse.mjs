export const name="lucid_2-list-collapse";
export const id="dl_29b5bd5ba8764370acd6";
export const url=new URL("../icons/lucid_2-list-collapse.svg?v=8cd6b386446ee1e5f08f3dfe4ac06df543e7947dcebede57b64d5ce3f34ae7b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
