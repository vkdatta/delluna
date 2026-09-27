export const name="toggle-right";
export const id="dl_3470ad0910b3ed4e9df8";
export const url=new URL("../icons/toggle-right.svg?v=1ed23a1d9ba44f507bf809ed37e7ec634b612b863423a015fa603fe61f7061d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
