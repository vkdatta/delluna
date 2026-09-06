export const name="user-check";
export const id="dl_4d346248a76b431bbad9";
export const url=new URL("../icons/user-check.svg?v=9a3d44f09adf327965d178848ec06a551de7be142f05bd7732b2c92fb4d2a3ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
