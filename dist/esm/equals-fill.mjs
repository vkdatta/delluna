export const name="equals-fill";
export const id="dl_ef04cd1f2b004a34b3e6";
export const url=new URL("../icons/equals-fill.svg?v=8eb6629aeebfa83879abb11f279aad165da4bdf47d3c2bf0cb8bd17a0011e4ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
