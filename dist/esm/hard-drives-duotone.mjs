export const name="hard-drives-duotone";
export const id="dl_704ba84a54474daebec2";
export const url=new URL("../icons/hard-drives-duotone.svg?v=fb6cf5b15ef570b01529086fdee0c6834047e1fabe29dbfd29b9b22e68f5fc80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
