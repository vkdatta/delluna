export const name="assignment_turned_in-fill";
export const id="dl_7365ad0fd87feb36c3f4";
export const url=new URL("../icons/assignment_turned_in-fill.svg?v=e39f870209bbe337410dc6d05fe2e45fb825dfc515070a78b00f702e85aea186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
