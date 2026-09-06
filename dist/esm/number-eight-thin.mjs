export const name="number-eight-thin";
export const id="dl_47f9441380f241ccbdd0";
export const url=new URL("../icons/number-eight-thin.svg?v=d791e16b9928b3ef1bd7b36ae9bbe89a582a655c527fc818b84786aa4e2687ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
