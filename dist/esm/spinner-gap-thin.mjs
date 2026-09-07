export const name="spinner-gap-thin";
export const id="dl_7d3dd076d82548e294fd";
export const url=new URL("../icons/S/spinner-gap-thin.svg?v=b9694bedb9a879605c1edb8c11b4daba0173735eb57349a979c4dc65ca47f7d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
