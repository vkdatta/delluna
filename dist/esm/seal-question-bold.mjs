export const name="seal-question-bold";
export const id="dl_2961ff56e1ed5c225d53";
export const url=new URL("../icons/seal-question-bold.svg?v=305dbf2c85a189bc77d068c727c922fc1f64f77b6bd4903c38acb74ff8dad457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
