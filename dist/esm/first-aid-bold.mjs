export const name="first-aid-bold";
export const id="dl_805ebc239a0642e1845e";
export const url=new URL("../icons/first-aid-bold.svg?v=f4b926954ff2971c24048e1b8b53aeaaf9c4daec6ad395c7a2625ebdb9b4afe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
