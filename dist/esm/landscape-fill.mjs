export const name="landscape-fill";
export const id="dl_fc3d4691945cd8e265ad";
export const url=new URL("../icons/landscape-fill.svg?v=129a6ec87306e6b932a2205dd18d6388e5dda69e91b51f8a7b9993b01299a1de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
