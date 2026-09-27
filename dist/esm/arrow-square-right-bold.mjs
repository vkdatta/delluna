export const name="arrow-square-right-bold";
export const id="dl_815e066e948f4fab9750";
export const url=new URL("../icons/arrow-square-right-bold.svg?v=f938857be2e025d48816d16e046802e84642e4b7e04824a6219a6c763bba4373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
