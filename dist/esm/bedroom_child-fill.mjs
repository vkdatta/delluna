export const name="bedroom_child-fill";
export const id="dl_88b614b1633536de06d4";
export const url=new URL("../icons/bedroom_child-fill.svg?v=ab2125b05a53b36bea5faafc052f4130e2f2ef23d7cf7806b65558ffdd99eb40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
