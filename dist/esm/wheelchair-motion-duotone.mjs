export const name="wheelchair-motion-duotone";
export const id="dl_8825b061e21de5ac8da8";
export const url=new URL("../icons/wheelchair-motion-duotone.svg?v=b8902623df455d95d624a3ba399616944c3501a88adc93a52ea892a2b432aa50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
