export const name="altitude";
export const id="dl_06c5dd01b96e7fd0f618";
export const url=new URL("../icons/altitude.svg?v=91475d7dd70b41987692deb5488185a28209d471625682207b3e7b86e54381ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
