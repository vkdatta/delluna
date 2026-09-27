export const name="hourglass-simple-medium-duotone";
export const id="dl_53dad18571654905b9d0";
export const url=new URL("../icons/hourglass-simple-medium-duotone.svg?v=e639a6a3b983a8cac54d1d71a4f5e7cc79338d36b0c827b4159baa0dee98c043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
