export const name="hoodie-thin";
export const id="dl_929785fe5339422e94d3";
export const url=new URL("../icons/hoodie-thin.svg?v=f82d94732b7562e9acbd62b90bf41c7730ed64b18ef563efbd81ab5dd0a37178",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
