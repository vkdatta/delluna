export const name="arrow-fat-line-left-duotone";
export const id="dl_33ceefbacd004d0e992c";
export const url=new URL("../icons/arrow-fat-line-left-duotone.svg?v=1f227b9bcd28d75e9c77117cd0cbc5f3f2f5547f43f4add33f3ec57cd0d2a1e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
