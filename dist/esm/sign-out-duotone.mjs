export const name="sign-out-duotone";
export const id="dl_1dae60cac06126334c10";
export const url=new URL("../icons/sign-out-duotone.svg?v=23b8a2cca558570d78c2caddd82eb3f970124bc50782453756f0235d29907e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
