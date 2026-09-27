export const name="sailboat-fill";
export const id="dl_c092380d21bf8e04f930";
export const url=new URL("../icons/sailboat-fill.svg?v=6f870ed5f450526db35361920a9e932f0951a3226e5205748c3e8863e94e0596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
