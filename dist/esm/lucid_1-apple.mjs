export const name="lucid_1-apple";
export const id="dl_0ed7f23129d24824b009";
export const url=new URL("../icons/lucid_1-apple.svg?v=fed0620ffa4d2b4444beb6e127ac86e3319375d0c1d5689168c8e3850c9d3f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
