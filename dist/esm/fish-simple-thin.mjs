export const name="fish-simple-thin";
export const id="dl_19933477be6a4fb7810d";
export const url=new URL("../icons/fish-simple-thin.svg?v=27f472b3e77db9f7c574629ba8c430b4821d4a3e388379188ba53f9c14d3d161",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
