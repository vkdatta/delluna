export const name="assignment_late";
export const id="dl_0f614adb0c030d64d79f";
export const url=new URL("../icons/assignment_late.svg?v=130cec592cc29562a55c6a1460ca9aefb7f11e846647cdb5f509134071bcf335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
