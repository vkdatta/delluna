export const name="text-a-underline-bold";
export const id="dl_1093f12a32734864a356";
export const url=new URL("../icons/T/text-a-underline-bold.svg?v=369ded09977cdf35e15610afac915b75c626a38184918a9ddc099b69a84c1e97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
