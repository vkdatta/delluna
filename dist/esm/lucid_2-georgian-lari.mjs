export const name="lucid_2-georgian-lari";
export const id="dl_2634d65e5d63416a96eb";
export const url=new URL("../icons/lucid_2-georgian-lari.svg?v=f9cfcc10a28564b7db08aa17bb6e83e2240c1dd5e6129cb61d86cfacc2148c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
