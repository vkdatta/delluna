export const name="quiz-fill";
export const id="dl_df71a67de2437991fe10";
export const url=new URL("../icons/quiz-fill.svg?v=02bce1f213f62309b9c653f43bc16260b338f5bb89289dfecffcc6c855274dd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
