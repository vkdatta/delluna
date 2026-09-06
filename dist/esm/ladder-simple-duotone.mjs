export const name="ladder-simple-duotone";
export const id="dl_2e36bcc7e28d46019b06";
export const url=new URL("../icons/ladder-simple-duotone.svg?v=39d75ec34e9e5405a67cc5649f8996b7ed1f4f9bce8ef1db950745a10409ab45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
