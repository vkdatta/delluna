export const name="google_wifi";
export const id="dl_0c3aefdc03464ea0921a";
export const url=new URL("../icons/G/google_wifi.svg?v=eea4166a8ee3eff3d88cebb91da3f07e0adbfd5e180276c2eb8924c7d78f9047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
