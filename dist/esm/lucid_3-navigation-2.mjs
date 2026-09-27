export const name="lucid_3-navigation-2";
export const id="dl_bd9db738b458487ba0ae";
export const url=new URL("../icons/lucid_3-navigation-2.svg?v=3a0806af4d05bef50b03f42d16281584cfeb025e0015c1b77447a08f4f7873cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
