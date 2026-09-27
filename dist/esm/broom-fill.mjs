export const name="broom-fill";
export const id="dl_c3e5e79365064812b987";
export const url=new URL("../icons/broom-fill.svg?v=8c8d6ad52e6e37e93148269b1d65b8cc5798ad05d7f690a7ce835325d1226110",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
