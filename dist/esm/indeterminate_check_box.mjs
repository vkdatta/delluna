export const name="indeterminate_check_box";
export const id="dl_749d9d23e23146528f37";
export const url=new URL("../icons/indeterminate_check_box.svg?v=e8c6add3af08e1059528ad11fc58cea6376e29380caa6253797afd40d4d65eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
