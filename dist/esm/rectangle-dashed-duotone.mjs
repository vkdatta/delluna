export const name="rectangle-dashed-duotone";
export const id="dl_2159f27c6a4c499e976b";
export const url=new URL("../icons/rectangle-dashed-duotone.svg?v=3f3e448fe5cc98b68f37b86b87f9ad01c0c9fc267fdc80a238e6dc7e4c5f8bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
