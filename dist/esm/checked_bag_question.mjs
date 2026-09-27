export const name="checked_bag_question";
export const id="dl_b189be4026518add11a6";
export const url=new URL("../icons/checked_bag_question.svg?v=30aef03e8c39361b675ab8ed4d8c09f6f71d90ceb1504178c365101a7ab0aaae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
