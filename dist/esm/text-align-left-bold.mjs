export const name="text-align-left-bold";
export const id="dl_6fd66146e510ca347a08";
export const url=new URL("../icons/text-align-left-bold.svg?v=98138f0a67f637f9cdf0b244985d925568ba2335eafc6a072e40ff23b1501e80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
