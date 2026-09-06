export const name="marker-circle-duotone";
export const id="dl_17ef8c80d31c42f1b2f8";
export const url=new URL("../icons/marker-circle-duotone.svg?v=5abd3fb913b75ddb68f3e9a110c3aa3424be00ec7ee382cbedb01fa7268b3fe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
