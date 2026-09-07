export const name="letter-circle-p-bold";
export const id="dl_7eb530c6d15045139f9c";
export const url=new URL("../icons/letter-circle-p-bold.svg?v=2b45e51abcd367860134b46ac3f7c08ab8acb6e97e6b42f79e8cdaff0f63a034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
