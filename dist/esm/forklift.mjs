export const name="forklift";
export const id="dl_7396c818ae8f456f93d9";
export const url=new URL("../icons/forklift.svg?v=3555fc853e172911fbc7325e11bbf9a8387492f92f9f0aa97ab2410aed03ccbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
