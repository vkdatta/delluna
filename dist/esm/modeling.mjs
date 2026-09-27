export const name="modeling";
export const id="dl_0e51dc165d58855d2bb8";
export const url=new URL("../icons/modeling.svg?v=d5477b053c4fc6c710c63d3e1ab34bc59211c6948a460c8ce5a84f3b3011d6ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
