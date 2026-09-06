export const name="mountains-fill";
export const id="dl_31b1222bc78f4452befc";
export const url=new URL("../icons/mountains-fill.svg?v=84d635ae899a9eb916fc1ed698d809cca60be8650bd0c2e83144899ff0498b18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
