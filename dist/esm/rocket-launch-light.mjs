export const name="rocket-launch-light";
export const id="dl_530092c6a03449c3ab18";
export const url=new URL("../icons/rocket-launch-light.svg?v=2321e09f78fe19d0a591cdbf8736e7d397b209386b65fcc6adac985910fe7a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
