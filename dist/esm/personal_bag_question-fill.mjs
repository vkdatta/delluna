export const name="personal_bag_question-fill";
export const id="dl_50e8c86415a673d5f534";
export const url=new URL("../icons/personal_bag_question-fill.svg?v=796d99595cb9939282e91f168df14d890cd3e491e601d887ea7fdf993840847b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
