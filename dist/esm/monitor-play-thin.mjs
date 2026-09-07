export const name="monitor-play-thin";
export const id="dl_7f8e0d6f4bbf4b72ae44";
export const url=new URL("../icons/monitor-play-thin.svg?v=704fb91b883928d34b7c3cee0bd254eac46f1ddb04e8d6188394da5076979352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
