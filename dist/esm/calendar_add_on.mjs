export const name="calendar_add_on";
export const id="dl_a82dd35b6479aa085bac";
export const url=new URL("../icons/calendar_add_on.svg?v=268a81195675c580f1783bfe15861dda68a9e07cb6cc75318556e0cc7058aa3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
