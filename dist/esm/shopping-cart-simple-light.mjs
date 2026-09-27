export const name="shopping-cart-simple-light";
export const id="dl_cfdd79c148c88cf6076d";
export const url=new URL("../icons/shopping-cart-simple-light.svg?v=dce9db33accecb18f8f76ec2870df89a1bc7fbe44d5c0b9510f3aee9f1b1fc49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
