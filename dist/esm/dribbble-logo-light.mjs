export const name="dribbble-logo-light";
export const id="dl_46a50d6f4e724ed8a2ae";
export const url=new URL("../icons/dribbble-logo-light.svg?v=2b953b97e0c41261565b1ab18d75ab6d6b8b0b7e050019350d4a6eb389f2c846",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
