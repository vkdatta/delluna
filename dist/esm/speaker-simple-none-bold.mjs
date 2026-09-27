export const name="speaker-simple-none-bold";
export const id="dl_51258b24a4d6b95b54d6";
export const url=new URL("../icons/speaker-simple-none-bold.svg?v=4365113f7eec0e287fec80f85d02d4ed2431a3bc7ec17fe57d7bf963ad19c28a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
