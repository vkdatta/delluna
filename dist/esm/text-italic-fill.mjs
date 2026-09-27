export const name="text-italic-fill";
export const id="dl_52c4b12601eb7fea52f6";
export const url=new URL("../icons/text-italic-fill.svg?v=8d3e886f1c138765df2cb6bdc885739aefaffca623ccd4f4896d2fa3a1ce8567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
