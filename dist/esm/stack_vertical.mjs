export const name="stack_vertical";
export const id="dl_b63bde2619bfc44a63a2";
export const url=new URL("../icons/stack_vertical.svg?v=a2f383d7ec60b5218dd0861b002637d871341fa844e901dc86f10e863beb18b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
