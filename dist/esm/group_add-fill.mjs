export const name="group_add-fill";
export const id="dl_8654facdc87ebbb4a60c";
export const url=new URL("../icons/group_add-fill.svg?v=0214bafbbe12244a37539b7c7f12d80ac41c44674058a3e8915691fcaa8dfefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
