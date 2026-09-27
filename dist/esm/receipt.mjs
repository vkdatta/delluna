export const name="receipt";
export const id="dl_d33ff8b04fc14f168eac";
export const url=new URL("../icons/receipt.svg?v=4d9bd67d1f851cd76dfb875cddfe7ddb27c83e882d3469e6cea9f8570ec837c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
