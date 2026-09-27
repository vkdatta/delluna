export const name="lucid_3-navigation-2";
export const id="dl_bd9db738b458487ba0ae";
export const url=new URL("../icons/lucid_3-navigation-2.svg?v=e4a718e646b18a69ac66df4944d9a9ca02b587153acbf9c8e565575eae1dddfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
