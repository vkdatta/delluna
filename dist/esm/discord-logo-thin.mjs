export const name="discord-logo-thin";
export const id="dl_1c82b7208d6b48e4bea8";
export const url=new URL("../icons/discord-logo-thin.svg?v=ca889e54666fc2409d476420e2169bf3c65a8039f4c1535797f3c79ad801ff57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
