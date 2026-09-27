export const name="flower-lotus";
export const id="dl_008510345f514aa4a6eb";
export const url=new URL("../icons/flower-lotus.svg?v=bd8b6c416cb704c9e2685fb80519b79df4160e9837eaf92a169af790e8b5a5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
