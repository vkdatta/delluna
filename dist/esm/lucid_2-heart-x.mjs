export const name="lucid_2-heart-x";
export const id="dl_8c8e95e0b40c42de8e22";
export const url=new URL("../icons/lucid_2-heart-x.svg?v=f367f462a2eb338cfe65e7bc00f267fc22194a190aa38235d30f9c8d5cced8d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
