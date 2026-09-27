export const name="lucid_2-heading-3";
export const id="dl_654d7e8901664e18ac68";
export const url=new URL("../icons/lucid_2-heading-3.svg?v=20d4297170d4a1bb015794bd118c282eb8c65f817f762759676ff56d099d7df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
