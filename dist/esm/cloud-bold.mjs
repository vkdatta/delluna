export const name="cloud-bold";
export const id="dl_1f741727968641bcba7e";
export const url=new URL("../icons/cloud-bold.svg?v=115a428509f5df61617f55c958ef9ae17de800fc7063b6f6e5ba90ef7fc84d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
