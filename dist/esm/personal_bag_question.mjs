export const name="personal_bag_question";
export const id="dl_75ac38f3913c48d2a1f8";
export const url=new URL("../icons/P/personal_bag_question.svg?v=a803645c53af21dbfd0c6cd209fe366f313dab9013162bc70d11120cc0e05f57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
