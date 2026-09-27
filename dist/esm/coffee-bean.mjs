export const name="coffee-bean";
export const id="dl_e40acac1d4ce4e34865d";
export const url=new URL("../icons/coffee-bean.svg?v=1c03ff920a40b65b72f195969525053bcadf98aa83ebf05ffda80a397bc4b7b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
