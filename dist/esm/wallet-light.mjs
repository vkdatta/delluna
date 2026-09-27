export const name="wallet-light";
export const id="dl_dc21e4ecaa160a395b83";
export const url=new URL("../icons/wallet-light.svg?v=41630201e313bf82abafae563277361862b6a866a57765bafbf28324984bc5b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
