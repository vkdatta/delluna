export const name="squircle-dashed";
export const id="dl_81621577ed5e4500b11f";
export const url=new URL("../icons/squircle-dashed.svg?v=0d76078ff8af1a926ae3cdd893a96bc36bc3336e8bddb518cf2d274eaab0f017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
