export const name="globe_clock-fill";
export const id="dl_1254bf2b20924646bcb2";
export const url=new URL("../icons/G/globe_clock-fill.svg?v=26a5daf937929c6ab71c6767dca380bbe097fff4337d564027c4dd84d00e7511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
