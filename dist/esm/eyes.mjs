export const name="eyes";
export const id="dl_b67225165f0a4b96be57";
export const url=new URL("../icons/eyes.svg?v=8f0270a620aa58ab5e2f39bf9170d57004d096a18c4917e93bc25a4be9e02cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
