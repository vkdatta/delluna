export const name="reddit-logo-bold";
export const id="dl_d493087a26514eaca064";
export const url=new URL("../icons/reddit-logo-bold.svg?v=8a030149581399b51961a2fa9a7ee82008e2d32193dd42223237c1a5bb4d02af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
