export const name="student-light";
export const id="dl_eafb54500d55a108a045";
export const url=new URL("../icons/student-light.svg?v=d6b94a7030ce525103da53b72ad5e24b85cbaf836637a9cd26b093dd4e5c57c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
