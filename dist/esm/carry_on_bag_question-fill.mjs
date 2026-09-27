export const name="carry_on_bag_question-fill";
export const id="dl_a6639a96d4c86956327d";
export const url=new URL("../icons/carry_on_bag_question-fill.svg?v=2dd4fa75500582a04dc350a6892a0afa3342db225a16645758446dbded21d248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
