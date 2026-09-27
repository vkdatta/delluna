export const name="rss-duotone";
export const id="dl_429a8a8ef95c4678ab91";
export const url=new URL("../icons/rss-duotone.svg?v=65f59eedfc2ca5c38d85daf2a083fe9066086bcd25496049146f4c58599d5a44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
