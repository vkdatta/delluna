export const name="key-return-duotone";
export const id="dl_9476e24f0a9541d5aabc";
export const url=new URL("../icons/key-return-duotone.svg?v=aa4379c1615a34fa02099db8ca173f13a305dd0d946c7cac1d9ecc9c32c66c6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
