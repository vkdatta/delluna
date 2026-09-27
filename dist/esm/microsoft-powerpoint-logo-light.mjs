export const name="microsoft-powerpoint-logo-light";
export const id="dl_f9c0755de7c34565a609";
export const url=new URL("../icons/microsoft-powerpoint-logo-light.svg?v=d3c1defbe1a1c940c2f0753be8397934ad243be213710330e4f37004f8383b6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
