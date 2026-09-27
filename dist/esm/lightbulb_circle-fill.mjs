export const name="lightbulb_circle-fill";
export const id="dl_3be4715a5d290b2bb75f";
export const url=new URL("../icons/lightbulb_circle-fill.svg?v=4d55c2f227dac5b22dffd405560d7724a077ab71992aefc25017e482457df1ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
