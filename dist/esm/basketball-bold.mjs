export const name="basketball-bold";
export const id="dl_da092d36578c49808329";
export const url=new URL("../icons/basketball-bold.svg?v=700a95a38438a358cee583f0b422e0dfb66eeeef0f8a689fe9b2fe827f95ec9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
