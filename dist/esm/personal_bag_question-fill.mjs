export const name="personal_bag_question-fill";
export const id="dl_fd70b3b48880d7ce2408";
export const url=new URL("../icons/personal_bag_question-fill.svg?v=e82445a5eacd3382883e858936e54882262b926859078f16c792c6d24f94ee52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
