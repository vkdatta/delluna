export const name="feather-bold";
export const id="dl_d83ed3e96e67448b920e";
export const url=new URL("../icons/feather-bold.svg?v=fea356d180e3fd5ad91c7bf043b91442f4308b9c639e9df3c3427bcdea008754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
