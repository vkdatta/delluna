export const name="flip-vertical";
export const id="dl_b4b7b65d5c6d45e3921a";
export const url=new URL("../icons/flip-vertical.svg?v=43110fb8f1a2bc7a9387067432b9e3cf5623538b0919936aea2790f0d88bcf63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
