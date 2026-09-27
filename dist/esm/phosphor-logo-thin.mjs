export const name="phosphor-logo-thin";
export const id="dl_b4e6f5889cb14696bbca";
export const url=new URL("../icons/phosphor-logo-thin.svg?v=cd0a61f438abdaa69773ba38f6c2b2cb01d29512b29978a61e08a9faf2e81931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
