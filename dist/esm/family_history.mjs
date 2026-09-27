export const name="family_history";
export const id="dl_82e34fd9ea39f378ac9e";
export const url=new URL("../icons/family_history.svg?v=5df489bc4e26cae3191dd301609cbe618fd0c51f86426ea868d8ef80e501663d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
