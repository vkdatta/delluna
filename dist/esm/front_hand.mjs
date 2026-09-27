export const name="front_hand";
export const id="dl_90d4b7f34d7ff25e117e";
export const url=new URL("../icons/front_hand.svg?v=0a8cbb541346c91ef350afdd0bff4d8637233971cde4f9759d1e50b02ba525b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
