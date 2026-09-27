export const name="microsoft-word-logo-light";
export const id="dl_7a15683b920348caa1e7";
export const url=new URL("../icons/microsoft-word-logo-light.svg?v=d918e504a6cda8c56534b750f1e424ee7aad16ec13858e9468575ab3195173b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
