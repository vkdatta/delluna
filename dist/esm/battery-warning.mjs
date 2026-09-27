export const name="battery-warning";
export const id="dl_204f38af29bd4a23ba17";
export const url=new URL("../icons/battery-warning.svg?v=df1a59bf4d4f430b6fe86f83255ea9d97b5b56c1134e942c57410ccc1393eb72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
