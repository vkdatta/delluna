export const name="lucid_2-hand-heart";
export const id="dl_311e22ce355848f48e98";
export const url=new URL("../icons/lucid_2-hand-heart.svg?v=c6fadaae69f41b915b09f06b9a39467180b9750a5a98c79048ba51c269ad5a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
