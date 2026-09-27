export const name="instagram-logo-bold";
export const id="dl_5228bb126b7a4d3eba33";
export const url=new URL("../icons/instagram-logo-bold.svg?v=38345c361b784c4f35be2ff5a699ba16562616355f368b74607730696ec047be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
