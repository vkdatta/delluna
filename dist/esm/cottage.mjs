export const name="cottage";
export const id="dl_44938bcbd5780676d9ed";
export const url=new URL("../icons/cottage.svg?v=c8b6f6cbd83c66ade4e21838f4607e1cb6cf0e3fbc38a0e1f1c27ee1331e837e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
