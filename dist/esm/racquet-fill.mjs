export const name="racquet-fill";
export const id="dl_48d8469dc3ce471a9610";
export const url=new URL("../icons/racquet-fill.svg?v=630917119492893c030b83bf1cbb2cb4a4753c357a8fc2af1779820cad020fc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
