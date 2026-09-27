export const name="dresser-fill";
export const id="dl_b17730e34cb5479ba06f";
export const url=new URL("../icons/dresser-fill.svg?v=d1663c257375fa9731b833cd66ce68aae9417d342d820e4e60a352f10babf37f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
