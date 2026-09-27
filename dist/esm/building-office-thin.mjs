export const name="building-office-thin";
export const id="dl_05914abe3986405dbfa7";
export const url=new URL("../icons/building-office-thin.svg?v=8edbcda0ffff9da4c22a1d4c7e8f78ac980e25cd4f9bf1cb3f4236048fe7067c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
