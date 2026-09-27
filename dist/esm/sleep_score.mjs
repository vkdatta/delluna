export const name="sleep_score";
export const id="dl_341f203dd5bc4dabc632";
export const url=new URL("../icons/sleep_score.svg?v=951f22e5707a57c4d06123c0368e5baa258eb5b0f901f3b824d1b3a207c83d92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
