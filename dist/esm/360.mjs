export const name="360";
export const id="dl_9f4d80b6f4afe806c9eb";
export const url=new URL("../icons/360.svg?v=c7c51e2bcbd1e1de4f46c894a05dd79737b76538b7cfb1b1771c976e914de961",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
