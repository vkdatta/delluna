export const name="escalator-down";
export const id="dl_eb7dcd9f394b4330b308";
export const url=new URL("../icons/escalator-down.svg?v=3ee1bf1dd30d05b21ab2ab22c55bb78688ab26f00deed7864a29e6e4290812cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
