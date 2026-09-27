export const name="lucid_2-fish-off";
export const id="dl_cffa62915b7541d59dcd";
export const url=new URL("../icons/lucid_2-fish-off.svg?v=8b4ca0197ca5e1524c268ac20caae245090e19a5bd21dbf4b0fe002f640d7555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
