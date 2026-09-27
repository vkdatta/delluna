export const name="carry_on_bag_checked";
export const id="dl_89eb74772123e7acdf86";
export const url=new URL("../icons/carry_on_bag_checked.svg?v=51c88d89f33bf37b5c7aca3b44589c034469cd279902c09c05476e13b60c0966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
