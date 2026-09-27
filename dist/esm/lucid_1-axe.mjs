export const name="lucid_1-axe";
export const id="dl_8ab1c97b63c0470ab8c5";
export const url=new URL("../icons/lucid_1-axe.svg?v=b572e57f20c473d07919e56fb44e3f55575e4b6584cb8ddd4fddafd2e5090042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
