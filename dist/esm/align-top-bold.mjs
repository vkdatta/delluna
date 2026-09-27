export const name="align-top-bold";
export const id="dl_739afd4c1bc647b7a82d";
export const url=new URL("../icons/align-top-bold.svg?v=ce65243fec7e40113a659eceac1489d198b26bc3d3811b18c23474ffad99810e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
