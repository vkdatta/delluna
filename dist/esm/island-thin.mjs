export const name="island-thin";
export const id="dl_27bdc8c816c649f2a95b";
export const url=new URL("../icons/island-thin.svg?v=14737a0bce2a11262032d7a2939b2ee626650ab08dfcf4785f82852e6b7f0a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
