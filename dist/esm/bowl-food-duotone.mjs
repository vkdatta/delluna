export const name="bowl-food-duotone";
export const id="dl_35cca0fc4ef9485eb6dc";
export const url=new URL("../icons/bowl-food-duotone.svg?v=b22499e64afe5c7a1cf059727ee5266b06e33d2e1791281276305b43ad367a95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
