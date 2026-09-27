export const name="carry_on_bag_question";
export const id="dl_4d1d10883fafe000bad6";
export const url=new URL("../icons/carry_on_bag_question.svg?v=ec3da9d490cc966b073d21853bfefe186d1d2c4ea180a343475ed943edfb3dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
