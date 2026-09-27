export const name="code-simple-thin";
export const id="dl_c4412bec14e44e5395bc";
export const url=new URL("../icons/code-simple-thin.svg?v=3245c0510c7370d5fb11ebb203cb9b5439b2c11d5fb9e4f3d423b83449c1c73f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
