export const name="handbag-simple";
export const id="dl_e5d92db3ca964f91b521";
export const url=new URL("../icons/handbag-simple.svg?v=b9227cc143f69a7ceb44286d0d9bdb5a5c21f36dc9f8a032689dac1448a3ab9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
