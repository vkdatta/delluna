export const name="stone";
export const id="dl_eec09a76f12344688ccc";
export const url=new URL("../icons/stone.svg?v=11cde03cb837ad4cc7421be06315ec99a77a7ead3275f567d6779e5ff1c28381",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
