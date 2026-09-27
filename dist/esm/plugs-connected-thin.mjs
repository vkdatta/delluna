export const name="plugs-connected-thin";
export const id="dl_307a418589dd4644be06";
export const url=new URL("../icons/plugs-connected-thin.svg?v=d6aa69a6fd9f87dd36e748a2c0a38b765ca0ee4861f3c52de11c301b60a9ebab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
