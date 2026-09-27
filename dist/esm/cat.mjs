export const name="cat";
export const id="dl_51fe692d9a6d4515bf02";
export const url=new URL("../icons/cat.svg?v=e149bbf582ef23ba8b79aac536a4e9c0e6619d557ce4306d0e698e23b20fcc01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
