export const name="gable";
export const id="dl_5f566d735406445ab348";
export const url=new URL("../icons/gable.svg?v=9a9c3ccc16723aa02edbc0cdea57bbe5a432996fd08592a05e14136e402616f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
