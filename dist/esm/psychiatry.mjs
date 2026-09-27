export const name="psychiatry";
export const id="dl_88a6a1cc0dc4556b2fd6";
export const url=new URL("../icons/psychiatry.svg?v=8169efdc1dc3685ebcf22e1b046d0c9657b77b21e0d10d15d0ed4cc8bf302fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
