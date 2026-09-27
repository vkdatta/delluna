export const name="lucid_2-drone";
export const id="dl_93760acb85584636aea1";
export const url=new URL("../icons/lucid_2-drone.svg?v=78eb73fa4a46cf5de47b44ea29426030cab7e78da1bad50cf70c31c08f437bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
