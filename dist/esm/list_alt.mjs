export const name="list_alt";
export const id="dl_954ee3646447407784fc";
export const url=new URL("../icons/L/list_alt.svg?v=d2a02990f48db5264530c814d9c9ea3f6a825a9ace58cca3ea9f07c45a4f3734",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
