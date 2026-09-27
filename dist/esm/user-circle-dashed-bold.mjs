export const name="user-circle-dashed-bold";
export const id="dl_4878455d9e7308195fb7";
export const url=new URL("../icons/user-circle-dashed-bold.svg?v=5c150f3e32f57790c0a4621183c35b493e94928701e5e7f00b04fe5622ff78b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
