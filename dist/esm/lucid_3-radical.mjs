export const name="lucid_3-radical";
export const id="dl_77bdb454d04a4939a122";
export const url=new URL("../icons/lucid_3-radical.svg?v=1e1d68885d18e24ea10fc130e16ceca7d761cecf7e6a1ff08db6ad3bd231310c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
