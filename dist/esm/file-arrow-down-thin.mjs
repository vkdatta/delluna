export const name="file-arrow-down-thin";
export const id="dl_fbb7bef57fca4e0283d8";
export const url=new URL("../icons/file-arrow-down-thin.svg?v=1b356bc45203b06e1351bb473e392cbbc2f346e4122e30aab91cfcc0e7c3567d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
