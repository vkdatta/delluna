export const name="trend-down-thin";
export const id="dl_bb2693c63fa74dc5bb2d";
export const url=new URL("../icons/T/trend-down-thin.svg?v=d930417e0721029e30b01910a8fd51d0f75094e5edc97960f40dd5d26eb97248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
