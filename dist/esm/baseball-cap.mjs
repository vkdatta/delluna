export const name="baseball-cap";
export const id="dl_12a7b75157114f92b250";
export const url=new URL("../icons/baseball-cap.svg?v=25cd4b6d92d10075204ab414d527d1cda0c07db2aaa2f13114ea40576c473cf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
