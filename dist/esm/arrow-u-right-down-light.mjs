export const name="arrow-u-right-down-light";
export const id="dl_420bcbf52cae43c6b188";
export const url=new URL("../icons/arrow-u-right-down-light.svg?v=ed81d713f47ba7bd6aa20f18d55145916008892c083e9ca419b98f6e53c54d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
