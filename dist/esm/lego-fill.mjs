export const name="lego-fill";
export const id="dl_ee545a3f01fd40ec88ee";
export const url=new URL("../icons/lego-fill.svg?v=6ca2a68180f35626bc4419ba1c4175d9f4883cea62c5caec9e1e3dcf24525dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
