export const name="alarm_on";
export const id="dl_531762a7e22f4cd1a9a2";
export const url=new URL("../icons/A/alarm_on.svg?v=22c4bc8b08f9a8ac9fdaedd4f35bab5e3f6bb4625785159e94791c33d12b85e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
