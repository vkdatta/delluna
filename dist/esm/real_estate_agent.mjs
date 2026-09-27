export const name="real_estate_agent";
export const id="dl_22cbf1a629200e1838ec";
export const url=new URL("../icons/real_estate_agent.svg?v=c736cefebb4a0e6d4a31544f8c903cff63c7fbfccfb9f7101d2155882fc649aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
