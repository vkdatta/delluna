export const name="add_to_drive-fill";
export const id="dl_6584743700ff7b46670e";
export const url=new URL("../icons/add_to_drive-fill.svg?v=a56e1d3a63d60fba467f9cd103ed25253c945fc4caade42e58399fefe2f91b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
