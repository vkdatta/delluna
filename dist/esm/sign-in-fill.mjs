export const name="sign-in-fill";
export const id="dl_9e91e87acc9f4f70ac85";
export const url=new URL("../icons/S/sign-in-fill.svg?v=e8463a01be6d39d6ae18c76c390defe64eff998039e8ef6a076c46f4fe78c9b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
