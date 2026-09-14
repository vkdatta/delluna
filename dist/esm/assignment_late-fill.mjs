export const name="assignment_late-fill";
export const id="dl_6c982c7b619a4c58b328";
export const url=new URL("../icons/A/assignment_late-fill.svg?v=25a81d1aa232cb5b800f4fa77991ddbdf33888bf6c78bf179886871978dcf7a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
