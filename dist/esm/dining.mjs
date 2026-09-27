export const name="dining";
export const id="dl_25e968009c3133769409";
export const url=new URL("../icons/dining.svg?v=38d0f5000aa9627f513905b08e8e8a6693734b51254a29dd5534a58ec2fd7309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
