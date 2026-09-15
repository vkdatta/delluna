export const name="enterprise-fill";
export const id="dl_7ee98f44663249daa781";
export const url=new URL("../icons/E/enterprise-fill.svg?v=2a29f0c09ca00f2d1981b252da6d830ecea99e744c2e24df18282940eae2c73c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
