export const name="real_estate_agent";
export const id="dl_03a026f04c188730323a";
export const url=new URL("../icons/real_estate_agent.svg?v=ed2a8c4ebe7a83daba4d1fc1dea48522e1452c200d0a341d98f6c2419846799d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
