export const name="payments";
export const id="dl_5845b2282d38da3b46a8";
export const url=new URL("../icons/payments.svg?v=558e81abd1cc52961b98f3da92935bb27d98e18ba5add807a8b7fd065dbadb23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
