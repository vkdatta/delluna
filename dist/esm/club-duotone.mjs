export const name="club-duotone";
export const id="dl_2f60de7ab7bf424cb73e";
export const url=new URL("../icons/club-duotone.svg?v=7b7356d19a7296764adb3b63fe494705c15f5b5c6eb0604980b154ac98c53de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
