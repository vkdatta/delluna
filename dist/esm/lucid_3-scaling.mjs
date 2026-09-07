export const name="lucid_3-scaling";
export const id="dl_063eaeeb6ebf400ca362";
export const url=new URL("../icons/lucid_3-scaling.svg?v=1b52be4057759828cce5bb8c323b78ca638459d6aedc194b9318025608cd169e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
