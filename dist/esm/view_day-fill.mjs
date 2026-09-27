export const name="view_day-fill";
export const id="dl_0b33ab9fc1af12c41e0b";
export const url=new URL("../icons/view_day-fill.svg?v=332ebaf8107432ad426ba4754a7fd0b974a80b570048b076c7e1da9eca6adcc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
