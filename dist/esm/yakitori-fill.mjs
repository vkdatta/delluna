export const name="yakitori-fill";
export const id="dl_b76a6dcb039a4d90751d";
export const url=new URL("../icons/yakitori-fill.svg?v=1de7e5fc3a2afd8b9e20845eade8620f6a4558c45aa975175571fa9ee165620b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
