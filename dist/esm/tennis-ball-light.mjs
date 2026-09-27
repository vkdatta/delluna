export const name="tennis-ball-light";
export const id="dl_758c4fca39e011b0471d";
export const url=new URL("../icons/tennis-ball-light.svg?v=9c50b0594d87cde68f4ece26851e888633f7d8c52db035e7d180054606a76d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
