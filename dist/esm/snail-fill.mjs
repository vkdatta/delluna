export const name="snail-fill";
export const id="dl_770dd10f274a977f379e";
export const url=new URL("../icons/snail-fill.svg?v=046d58638792a92e050697f53eedeaeb940c07af509d9f5764e5b71b391de16b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
