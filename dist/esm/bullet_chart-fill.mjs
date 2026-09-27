export const name="bullet_chart-fill";
export const id="dl_c7248ab20e1dfdfedee6";
export const url=new URL("../icons/bullet_chart-fill.svg?v=179380a43a757883cb185a0f89ec83b041fb88fc08d8c154e5deaa36eeb75b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
