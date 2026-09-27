export const name="number-nine-bold";
export const id="dl_547104ff665440fb8d35";
export const url=new URL("../icons/number-nine-bold.svg?v=9e23ad1130e438c97e98c97573ce8d2857d1f1686b19ffb51ea149404ad6a43e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
