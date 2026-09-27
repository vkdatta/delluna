export const name="list-plus-bold";
export const id="dl_f23e3ddb4a2d4d1c81f4";
export const url=new URL("../icons/list-plus-bold.svg?v=c1ff1ba2f4e0691afb337b5c702317e94d8172d96ef54765076848348764ad18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
