export const name="office-chair-bold";
export const id="dl_78392b45531b40619796";
export const url=new URL("../icons/office-chair-bold.svg?v=ad4601d979c31b77243cc53b64f147760e713734d9858f50ea773d05ce55bbf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
