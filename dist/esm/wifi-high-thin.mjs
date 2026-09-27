export const name="wifi-high-thin";
export const id="dl_c80c2cc688b6fd556513";
export const url=new URL("../icons/wifi-high-thin.svg?v=ddd48ab0569d3d4b81aaa0465a4b9dfc674b391bf6e5b5928bb14cf3d640b1b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
