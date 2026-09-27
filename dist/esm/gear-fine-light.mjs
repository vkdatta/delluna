export const name="gear-fine-light";
export const id="dl_ce3906030a374aa498c1";
export const url=new URL("../icons/gear-fine-light.svg?v=4722ab0713fbaa0998d024617d7b4aadcb17914c36120c480ddb56bb9fd9ff67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
