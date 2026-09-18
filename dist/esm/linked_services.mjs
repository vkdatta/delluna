export const name="linked_services";
export const id="dl_a039d4b09d06418db775";
export const url=new URL("../icons/linked_services.svg?v=14c0a9b5847ce0797ba5b79337c7d82e84266a23eb201147848ab6b1fb6dcbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
