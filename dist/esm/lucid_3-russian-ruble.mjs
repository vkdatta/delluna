export const name="lucid_3-russian-ruble";
export const id="dl_520afd67b44845e89745";
export const url=new URL("../icons/lucid_3-russian-ruble.svg?v=2bdd1d6810686de81a8498158bc632e374941b0e6e01573c7e4edf938ee68694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
