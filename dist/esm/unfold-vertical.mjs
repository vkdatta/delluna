export const name="unfold-vertical";
export const id="dl_78d888718edf4d18810f";
export const url=new URL("../icons/unfold-vertical.svg?v=13dc4a11699dd9a7838d3a4af016708e319e078c762a7b9f3460d09ded28386c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
