export const name="lucid_1-book-marked";
export const id="dl_5381806f8b764150b3a7";
export const url=new URL("../icons/lucid_1-book-marked.svg?v=63df4efae596db247323f9f38e0caf44b151ace36962f3c810ec61162810247f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
