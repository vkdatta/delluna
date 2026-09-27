export const name="fast-forward-circle-fill";
export const id="dl_b8c77b3e9fbf41c483d7";
export const url=new URL("../icons/fast-forward-circle-fill.svg?v=ae243e5c6310428f52e1b04d50d01b447a321363820d48fc4070eeee829884d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
