export const name="soundcloud-logo-bold";
export const id="dl_e1c909e95859e670ad6e";
export const url=new URL("../icons/soundcloud-logo-bold.svg?v=f237c61d6447fbfcef4fb040d31197eadef6b2f1c429d4f4f35ef52ded13620c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
