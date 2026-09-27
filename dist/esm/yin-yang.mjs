export const name="yin-yang";
export const id="dl_34cd4fe70c0ff6c105f6";
export const url=new URL("../icons/yin-yang.svg?v=a3e97526d044efd003ea4699bda47dd3de192b627cd591e507374a91ec90ae97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
