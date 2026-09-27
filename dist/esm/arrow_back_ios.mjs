export const name="arrow_back_ios";
export const id="dl_49c2a293ceca89034dd5";
export const url=new URL("../icons/arrow_back_ios.svg?v=606986743f93dd144b38a5de7d4db13d4f19acbb50e8fa749c7732b2dce983cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
