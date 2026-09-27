export const name="picnic-table";
export const id="dl_0c15448ee0374d248d35";
export const url=new URL("../icons/picnic-table.svg?v=25c16391204b2130ac20ac6c261584abbfc59001042624f461eba638e771ba27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
