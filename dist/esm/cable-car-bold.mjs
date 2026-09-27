export const name="cable-car-bold";
export const id="dl_94d938ae5f0a4b55a82b";
export const url=new URL("../icons/cable-car-bold.svg?v=bb53189ca463b95d754982c34e60f6be6226ff44daf25835cc2ca575bcdb41a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
