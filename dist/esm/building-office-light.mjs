export const name="building-office-light";
export const id="dl_36fa9e2cb0c84667aa4e";
export const url=new URL("../icons/building-office-light.svg?v=3024afedd652379a8b03561ae0639a694975e11b37a5068f4cb2c0c198aa6e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
