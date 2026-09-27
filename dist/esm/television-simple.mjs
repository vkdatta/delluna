export const name="television-simple";
export const id="dl_507a11738971ab20e93a";
export const url=new URL("../icons/television-simple.svg?v=ac5871a94192bd277c3846c39431d6022172fdfa0306e65d2ff5145a78d8592c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
