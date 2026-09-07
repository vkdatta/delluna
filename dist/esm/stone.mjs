export const name="stone";
export const id="dl_eec09a76f12344688ccc";
export const url=new URL("../icons/stone.svg?v=85f739b1f46d3dbad8728d99c4e1d05548cd9a016e74712f66bf8d224bdab45a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
