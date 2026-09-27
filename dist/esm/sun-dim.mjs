export const name="sun-dim";
export const id="dl_21fabc86e67d41bab2ff";
export const url=new URL("../icons/sun-dim.svg?v=db85d896960730220c0d973133f2ab26d4258c6ed7daba43ae30ead3998b93a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
