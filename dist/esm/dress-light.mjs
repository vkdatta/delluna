export const name="dress-light";
export const id="dl_9884db232f2b4dd0b63c";
export const url=new URL("../icons/dress-light.svg?v=d8f3bbd923e8d620ef3d2b4c24f9a0c8538f9c824c58590913b792cd1bf0a247",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
