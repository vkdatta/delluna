export const name="alarm_off";
export const id="dl_eb6a6c6ac04f49d4b64e";
export const url=new URL("../icons/A/alarm_off.svg?v=b60ea193561bb1e21c54a9353959895b4d9369f66475409b7cd98ba80a7a43d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
