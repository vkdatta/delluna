export const name="user-rectangle-fill";
export const id="dl_813ab4d2cb1d4f52ba35";
export const url=new URL("../icons/U/user-rectangle-fill.svg?v=0e99bbddcd3865e94684af6831914bb991ddf01ef60733e8e27e18fe378a1b46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
