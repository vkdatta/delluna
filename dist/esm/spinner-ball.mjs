export const name="spinner-ball";
export const id="dl_64e9ca002396dfd42af0";
export const url=new URL("../icons/spinner-ball.svg?v=034590788493ddadc5f5bd8782b91b7dfbb7927db4a085674e69a07add400ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
