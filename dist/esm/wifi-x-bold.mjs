export const name="wifi-x-bold";
export const id="dl_79409df81a4dedd7510f";
export const url=new URL("../icons/wifi-x-bold.svg?v=ad9f71a557a31c4ba8a1c530fe349e5c87f16d5265fb8b84e05f9830dc516d84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
