export const name="dock_to_bottom";
export const id="dl_25cc37abbd74bff354c2";
export const url=new URL("../icons/dock_to_bottom.svg?v=e34f176c246c189b5c127add8c0df9c8c6a1f93a93fe34c830f4780572442f4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
