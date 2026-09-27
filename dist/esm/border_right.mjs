export const name="border_right";
export const id="dl_2a32b98e79d0651145c1";
export const url=new URL("../icons/border_right.svg?v=b6ffe464ca81d4b3fcbbf69e59a01efaecb6b62983734b9f9c62311d6c534e01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
