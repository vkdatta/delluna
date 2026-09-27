export const name="lucid_2-library-big";
export const id="dl_b41ccf4e83b0496d99f7";
export const url=new URL("../icons/lucid_2-library-big.svg?v=3315c374d6f7a9450400164a6cb0aeea2c830a2b4d33e4bb065acf3b1797fa91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
