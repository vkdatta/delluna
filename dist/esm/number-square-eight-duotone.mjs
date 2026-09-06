export const name="number-square-eight-duotone";
export const id="dl_3e8625e664f94b58b45e";
export const url=new URL("../icons/number-square-eight-duotone.svg?v=4bb412364a162ee99c1fbfb9568eeba243c8ea7f4d2f0ede7862f77e3eebbd23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
